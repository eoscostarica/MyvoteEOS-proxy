const moment = require('moment')
const twitterConfig = require('../config/twitter.config')

const { hasuraUtil, twitterUtil } = require('../utils')
const exchangeStateService = require('./exchange-state.service')

const save = async payload => {
  const mutation = `
      mutation ($payload: exchange_insert_input!) {
        insert_exchange_one(object: $payload) {
          id
        }
      }
    `

  const data = await hasuraUtil.instance.request(mutation, {
    payload
  })

  return data.insert_exchange_one
}

const getExchanges = async() => {
  const query = `
      query {
        exchange {
          id
          t_username
          total_mention
        }
      }
    `

  const data = await hasuraUtil.instance.request(query)

  return data.exchange
}

const incrementMention = async(payload) => {
  const mutation = `
      mutation ($id: uuid!, $increment: Int!) {
        update_exchange(where: {id: {_eq: $id}}, _inc: {total_mention: $increment}) {
          affected_rows
        }
      }
    `

  const data = await hasuraUtil.instance.request(mutation, {
    ...payload
  })

  return data.insert_exchange_one
}

const countMentions = async() => {
  const { lastSyncedAt } = await exchangeStateService.getState() || {}
  const exchanges =  await getExchanges()
  const newMentions = await twitterUtil.countMentions(exchanges.map(({t_username}) => t_username), lastSyncedAt)

  for(const exchange of exchanges) {
    await incrementMention({
      id: exchange.id,
      increment: newMentions[exchange.t_username]
    })
  }

  await exchangeStateService.saveOrUpdate(moment().toISOString())
}

const countMentionsWorker = () => {
  return {
    name: 'UPDATE MENTIONS',
    action: countMentions,
    interval: twitterConfig.countMentionsInterval
  }
}

module.exports = {
  save,
  countMentionsWorker
}
