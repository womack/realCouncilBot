
const commando = require("discord.js-commando");
const jimp = require("jimp");

class KickCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "kick",
            group: "picturemanip",
            memberName: "kick",
            description: "Kick someone under a bus! @Mention"
        });
    }
    async run(message) {
        if (message.mentions.users.first()) {
            let authorURL = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(0, -5) + ".png" : message.author.displayAvatarURL;
            let targetPerson = message.mentions.users.first();
            let targetURL = targetPerson.displayAvatarURL.endsWith(".webp") ? targetPerson.displayAvatarURL.slice(0, -5) + ".png" : targetPerson.displayAvatarURL;
            jimp.read("./resources/images/kick.jpg", (err, image) => {
                if (err) { return console.log(err); }
                jimp.read(authorURL, (err, author) => {
                    if (err) { return console.log(err); }
                    author.resize(80, 80);
                    author.rotate(-12);
                    jimp.read(targetURL, (err, target) => {
                        if (err) { return console.log(err); }
                        target.resize(80, 80);
                        target.rotate(-8);
                        image.composite(author, 125, 210);
                        image.composite(target, 450, 345);
                        image.getBuffer(jimp.AUTO, (err, buff) => {
                            if (err) { return console.log(err); }
                            message.channel.sendFile(buff);
                        });
                    });
                });
            });
        }
    }
}

module.exports = KickCommand;
