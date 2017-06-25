//file require for auth key since i'm not pushing it to git
const data = require("./resources/privates.js");
const publicIp = require("public-ip");
var fs = require("fs");
const commando = require("discord.js-commando");
const bot = new commando.Client();

//random commands, currently only dice
bot.registry.registerGroup("random", "Random");
//arakoooone
bot.registry.registerGroup("quotes", "Quotes");
//admin functionality
bot.registry.registerGroup("admin", "Admin");
//default commands, not sure if beneficial
bot.registry.registerDefaults();
//registering all the commands in the directory
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(data.auth.key);
console.log("Online");

bot.on("message", (message) => {
    if (message.content === "checkIP" && message.author.username === "womackx") {
        publicIp.v4().then((ip) => {
            message.reply(ip);
        });
    }
});

