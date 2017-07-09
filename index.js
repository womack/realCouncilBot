//file require for auth key since i'm not pushing it to git
const data = require("./resources/privates.js");
const commando = require("discord.js-commando");
const bot = new commando.Client({ unknownCommandResponse: false });
//random commands
bot.registry.registerGroup("random", "Random");
//arakoooone and markov
bot.registry.registerGroup("quotes", "Quotes");
//admin functionality
bot.registry.registerGroup("admin", "Admin");
//roles functionality
bot.registry.registerGroup("roles", "Roles");
//picture manipulation
bot.registry.registerGroup("picturemanip", "PictureManip");
//default commands
bot.registry.registerDefaults();
//registering all the commands in the directory
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(data.key);
console.log("Online");
