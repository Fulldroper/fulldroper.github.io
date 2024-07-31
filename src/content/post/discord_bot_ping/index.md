---
title: "Discord Bot Ping"
description: "A Discord bot that creates temporary mentions of users in text channels to draw attention to content"
publishDate: "21 Feb 2023"
updatedDate: "22 Feb 2023"
tags: ["node.js", "discord", "bot"]
---
The purpose of the project was to create a Discord bot that generates temporary mentions of users in text channels to attract attention to content.

The project is useful as it helps moderators and users highlight important messages or announcements by temporarily pinging relevant members.

## How the project works

The bot connects to a Discord server and listens for specific commands. When a user issues a command to ping someone, the bot mentions the specified user in the text channel and then deletes the mention after a set period.

### Repository Link and Installation

You can find the repository and installation instructions at the following link:
[Discord Bot Ping](https://github.com/Fulldroper/discord.bot.ping)

### Algorithm and Code Examples

1. **Connecting to Discord Server**
```javascript
const Discord = require('discord.js');
const client = new Discord.Client();
client.login('YOUR_BOT_TOKEN');
client.on('ready', () => {
  console.log('Logged in as ' + client.user.tag + '!');
});
```

2. **Listening for Ping Commands**
```javascript
client.on('message', message => {
  if (message.content.startsWith('!ping')) {
    const user = message.mentions.users.first();
    if (user) {
      message.channel.send(`Hey ${user}, you were pinged!`).then(msg => {
        setTimeout(() => msg.delete(), 5000); // Deletes the message after 5 seconds
      });
    }
  }
});
```

## Skills Acquired

- Advanced JavaScript and Node.js programming
- Working with the Discord API
- Handling asynchronous operations
- Implementing temporary notifications in chat applications

