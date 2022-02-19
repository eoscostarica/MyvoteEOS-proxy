const {twitterUtil} = require('../utils')

module.exports = {
  method: 'POST',
  path: '/test',
  handler: async ({ payload: { account, options } }) => {
      const mentions = await twitterUtil.getMentions({account, options})
      console.log('MENTIONS', mentions)
      return {mentions}
  }
}
