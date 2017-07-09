const commando = require("discord.js-commando");
const Jimp = require("jimp");

class TheSearchCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "thesearch",
            group: "picturemanip",
            memberName: "thesearch",
            description: "The search meme"
        });
    }

    async run(message, args) {
        if (args) {
            Jimp.read("./resources/images/thesearch.png", function (err, image) {
                if (err) { console.error(err); }
                var text = new Jimp(160, 70, function (err, text) {
                    Jimp.loadFont("./resources/fonts/SFtoon.fnt").then(function (font) {
                        text.print(font, 0, 0, args, 130);
                        image.composite(text, 65, 330);
                        image.getBuffer(Jimp.AUTO, function (err, result) {
                            message.channel.sendFile(result);
                        });
                    });
                });
            });
        }
    }
}

module.exports = TheSearchCommand;
