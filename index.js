/**
 * Created by EWomack on 23/06/2017.
 */
//setting up bot with commando library
const commando = require('discord.js-commando');
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
bot.on("unhandledRejection", console.error);

//file require for auth key since i'm not pushing it to git
const keys = require("./privates.js");


//lesgoo
bot.login(keys.auth);

bot.on("message", (message) => {
    console.log(message.content);
});






