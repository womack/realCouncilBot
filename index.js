/**
 * Created by EWomack on 23/06/2017.
 */
const Discord = require('discord.js');

const bot = new Discord.Client();

bot.login("MzI1NzU2ODg1OTU1Mzc5MjEx.DC6ElQ.Cribu5n8W10heFkGc7D3nq3RBSY");

bot.on('message', (message) => {
    if (message.content == "Ping") {
        message.reply("Pong")
    }
});