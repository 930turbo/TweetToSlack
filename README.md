# TweetToSlack

This program forwards tweets from a specific Twitter user to a Slack channel.
The program starts by importing the required libraries (Twitter and Slack APIs).
Then, it sets up the Twitter client by specifying the credentials such as consumer_key, consumer_secret, access_token_key, access_token_secret. It also sets up the Slack client by specifying the token
After that, the program defines a variable twitterHandle as the Twitter handle of the user whose tweets you want to forward and another variable slackChannel as the ID of the Slack channel you want to forward the tweets to.

It then creates a stream to listen for tweets from the specified user twitterHandle, and in the callback function on stream, it posts the new tweets to the slack channel specified.

It's important to notice that to use this program, you need to have a valid twitter API credentials and also a slack API token, and also make sure that you have the correct permissions in the slack channel you're posting to.
