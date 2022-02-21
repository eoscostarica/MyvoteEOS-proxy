const { TwitterApi } = require('twitter-api-v2')

const { twitterConfig } = require('../config')

const twitterClient = new TwitterApi(twitterConfig.bearerToken)

const getMentions = async ({account, options = {}}) => {
    const {_realData: { data, meta }} = await twitterClient.v2.userMentionTimeline(
        account,
        {...options}
    )

    return { data, meta }
}

const countMentions = async () => {
    const exchanges = twitterConfig.exchanges.split(',')
    const exchangesMentions = {}

    const { meta: { total_tweet_count: totalMentions} } = await twitterClient.v2.tweetCountRecent(`#${twitterConfig.hashtag}`)
    for(const exchange of exchanges) {
        const { meta: { total_tweet_count: exchangeMentions} } = await twitterClient.v2.tweetCountRecent(`#${twitterConfig.hashtag} ${exchange}`)
        exchangesMentions[exchange] = exchangeMentions
    }

    return {
        totalMentions,
        exchangesMentions
    }
}

module.exports = {
    getMentions,
    countMentions
}