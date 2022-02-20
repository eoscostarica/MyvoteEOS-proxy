const Boom = require('@hapi/boom')

const {twitterUtil} = require('../utils')

module.exports = {
  method: 'POST',
  path: '/countMentions',
  handler: async () => {
      try {
        return  {
          mentions: await twitterUtil.countMentions()
        }
      } catch(err) {
        throw Boom.badRequest(error.message, { code: 'BAD_REQUEST' })
      }
  }
}
