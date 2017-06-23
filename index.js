/**
 * Created by EWomack on 23/06/2017.
 */
const Discord = require('discord.js');
const keys = require('privates.js');
const bot = new Discord.Client();

bot.login(keys.auth);

bot.on('message', (message) => {
    if (message.content == "Ping") {
        message.reply("Pong")
    }
});