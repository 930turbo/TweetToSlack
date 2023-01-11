const Twitter = require('twitter');
const Slack = require('@slack/web-api');

// Set up the Twitter client
const twitterClient = new Twitter({
  consumer_key: 'YOUR_CONSUMER_KEY',
  consumer_secret: 'YOUR_CONSUMER_SECRET',
  access_token_key: 'YOUR_ACCESS_TOKEN_KEY',
  access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
});

// Set up the Slack client
const slackClient = new Slack({
  token: 'YOUR_SLACK_TOKEN'
});

// The Twitter handle of the user whose tweets you want to forward
const twitterHandle = '@example_user';

// The ID of the Slack channel you want to forward the tweets to
const slackChannel = 'CHANNEL_ID';

// Set up a stream to listen for tweets from the specified user
const stream = twitterClient.stream('statuses/filter', {
  track: twitterHandle
});

stream.on('data', (tweet) => {
  // Send the tweet text to the Slack channel
  slackClient.chat.postMessage({
    channel: slackChannel,
    text: `New tweet from ${twitterHandle}:
