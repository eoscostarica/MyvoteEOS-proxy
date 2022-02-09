const proxyVotesService = require('../../proxy-votes.service')
const { eosUtil } = require('../../../utils')

module.exports = {
  type: 'eosio:voteproducer',
  apply: async action => {
    try {
      if (!action.data.proxy) return

      const accountBalance = await eosUtil.getTableRows({
        code: 'eosio.token',
        scope: action.data.voter,
        table: 'accounts',
        json: true
      })

      const eosAccountBalance = accountBalance.rows.find(({ balance }) =>
        balance.includes('EOS')
      )

      await proxyVotesService.save({
        proxy_account: 'novotebuyeos',
        voter: action.data.voter,
        balance: eosAccountBalance?.balance || '0 EOS'
      })
    } catch (error) {
      console.error(`error to sync ${action.action}: ${error.message}`)
    }
  }
}
