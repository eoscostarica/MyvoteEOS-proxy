const { hasuraUtil } = require('../utils')

const save = async payload => {
  const mutation = `
      mutation ($payload: proxy_votes_insert_input!) {
        insert_proxy_votes_one(object: $payload) {
          id
        }
      }
    `

  const data = await hasuraUtil.instance.request(mutation, {
    payload
  })

  return data.insert_proxy_votes_one
}

module.exports = {
  save
}
