const {twitterUtil} = require('../utils')

module.exports = {
  method: 'POST',
  path: '/test',
  handler: async ({ payload: {input: { account, options }} }) => {
      // return await twitterUtil.getMentions({account, options})
      return await twitterUtil.countMentions()
  }
}
