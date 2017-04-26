First project at GA

# finfinbot

### Introduction

finfinbot is a chat bot built on the [Hubot][hubot] framework. It was
initially generated by [generator-hubot][generator-hubot], and configured to be
deployed on [Heroku][heroku] to get you up and running as quick as possible.

### Running finfinbot Locally

You can test your hubot by running the following, however some plugins will not
behave as expected unless the [environment variables](#configuration) they rely
upon have been set.

You can start finfin locally by running:

    % bin/hubot

You'll see some start up output and a prompt:

    [Sat Feb 28 2015 12:38:27 GMT+0000 (GMT)] INFO Using default redis on localhost:6379
    finfin>

Then you can interact with finfin by typing `finfin help`.

    finfin> finfin help
    finfin animate me <query> - The same thing as `image me`, except adds [snip]
    finfin help - Displays all of the help commands that finfin knows about.
    ...

### Resolution

finfinbot is a chat bot that it can answer the questions and also can play number guessing game with you. If you feel alone just talk and play with finfinbot.

### Commands

A simple slackbot for the FinTsai slack, which does tasks including:

  - greet members
  - introduce
  - ask suggestion for the drink today
  - games

### Approach taken

Use Hubot to create following methods:

  - use .hear command listens for what members say and get response
  - use .respond when someone specifically mentions the Hubot using @
  - .reply method allows Hubot to reply to a directly to a user with an @ reply
  - .send method allows Hubot to send a message to the channel
  - use res.random to choose drink
  - brain.set to let Hubot to remember before questions
  - brain.get to get last questions

### Installation and running the bot

**install node package:**

  npm install

**run the bot using the following command:**

  HUBOT_SLACK_TOKEN=TOKEN-GOES-HERE ./bin/hubot --adapter slack

### Unsolved problems

Number guessing game still work on.
