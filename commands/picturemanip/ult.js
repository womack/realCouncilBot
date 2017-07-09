const commando = require("discord.js-commando");
const jimp = require("jimp");

class UltCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "ult",
            group: "picturemanip",
            memberName: "ult",
            description: "Gotta ult"
        });
    }
    async run(message, args) {
        if (args) {
            jimp.read('./resources/images/ult.png', (err, image) => {
                if (err) return console.log(err);
                var text = new jimp(630, 150, function (err, text) {
                    if (err) return console.log(err);
                    jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(function (font) {
                        text.print(font, 0, 0, args, 650);
                        image.composite(text, 15, 5)
                        image.getBuffer(jimp.AUTO, (err, buffer) => {
                            if (err) return console.log(err);
                            message.channel.sendFile(buffer)
                        })
                    });
                });
            });
        }
    }
}

module.exports = UltCommand;
