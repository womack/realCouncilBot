
const commando = require("discord.js-commando");
const jimp = require("jimp");

class NutCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "nut",
            group: "picturemanip",
            memberName: "nut",
            description: "Gotta nut"
        });
    }
    async run(message, args) {
        if (args) {
            jimp.read('./resources/images/nut.jpg', (err, image) => {
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

module.exports = NutCommand;
