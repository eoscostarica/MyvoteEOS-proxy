const { TwitterApi } = require('twitter-api-v2');

const twitterClient = new TwitterApi(<TOKEN>);
// const roClient = twitterClient.readOnly;
// pagination_token
const getMentions = async ({account, }) => {
    return await twitterClient.v2.userMentionTimeline(
        account,
        ...options
    )
}

module.exports = {
    getMentions
}