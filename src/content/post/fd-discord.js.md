---
title: "FD-Discord.js"
description: "NPM package for quick deployment of a Discord bot with a simplified setup"
publishDate: "06 Mar 2023"
updatedDate: "19 Jan 2024"
tags: ["Node.js", "Discord Bot", "NPM Package"]
---
The purpose of this project is to create an NPM package for the rapid deployment of a Discord bot, providing a lightweight solution for bot creation and management. More details can be found on the [NPM page](https://www.npmjs.com/package/fd-discord).

### Project Benefits
This project simplifies the process of creating and managing Discord bots, making it accessible for developers to quickly set up and deploy bots with minimal configuration.

### How the Project Works
The project provides an easy-to-use NPM package that allows developers to create a Discord bot by installing the package and configuring basic settings such as the bot token.

### Repository and Installation
[GitHub Repository](https://github.com/Fulldroper/fd-discord.js)

To install and use the package:

1. Install the package via NPM:
    ```bash
    npm i fd-discord
    ```

2. Create and configure your bot:
    ```javascript
    const bot = new (await require("fd-discord"))({
        token: TOKEN,
    });

    bot.on("READY", function() {
        console.log(this.user);
    });

    bot.on("MESSAGE_CREATE", console.log);
    ```

### Project Workflow
1. **Setup Project:** Initialize the project structure and install the package.
    ```bash
    npm init
    npm install fd-discord
    ```

2. **Create Discord Bot:** Set up and configure the bot with the necessary token.
    ```javascript
    const bot = new (await require("fd-discord"))({
        token: TOKEN,
    });

    bot.on("READY", function() {
        console.log(this.user);
    });

    bot.on("MESSAGE_CREATE", console.log);
    ```

### Skills Gained
- Developing Discord bots with Node.js
- Utilizing NPM packages for rapid deployment
- Managing and configuring bot settings
