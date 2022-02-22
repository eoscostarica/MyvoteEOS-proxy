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

const countMentions = async (tUsernames, startTime) => {
    const mentions = {}
    
    for(const exchange of tUsernames) {
        const { meta: { total_tweet_count: exchangeMentions} } = await twitterClient.v2.tweetCountRecent(
            `#${twitterConfig.hashtag}${twitterConfig.account !== exchange? ` ${exchange}` : ''}`, {
                start_time: startTime
            }
        )
        mentions[exchange] = exchangeMentions
    }

    return mentions
}

module.exports = {
    getMentions,
    countMentions
}