//file require for auth key since i'm not pushing it to git
const data = require("./resources/privates.js");
var fs = require("fs");
const commando = require("discord.js-commando");
const bot = new commando.Client({ unknownCommandResponse: false });
//random commands, currently only dice
bot.registry.registerGroup("random", "Random");
//arakoooone
bot.registry.registerGroup("quotes", "Quotes");
//admin functionality
bot.registry.registerGroup("admin", "Admin");
//roles functionality
bot.registry.registerGroup("roles", "Roles");
//default commands, not sure if beneficial
bot.registry.registerDefaults();
//registering all the commands in the directory
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.login(data.key);
console.log("Online");
process.on("unhandledRejection", err => {
    console.error("Uncaught Promise Error: \n" + err.stack);
});
