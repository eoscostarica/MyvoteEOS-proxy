const { TwitterApi } = require('twitter-api-v2')

const { twitterConfig } = require('../config')

const twitterClient = new TwitterApi(twitterConfig.bearerToken)

const getMentions = async ({account, options = {}}) => {tweetCountRecent
    const {_realData: { data, meta }} = await twitterClient.v2.userMentionTimeline(
        account,
        {...options}
    )

    return { data, meta }
}

const countMentions = async () => {
    const { meta: { total_tweet_count: totalMentions} } = await twitterClient.v2.tweetCountRecent('#MyvoteEOS')

    return {
        totalMentions
    }
}

module.exports = {
    getMentions,
    countMentions
}