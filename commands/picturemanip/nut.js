
const commando = require("discord.js-commando");
const Jimp = require("Jimp");

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
            Jimp.read("./resources/images/nut.jpg", (err, image) => {
                if (err) { return console.log(err); }
                let text = new Jimp(630, 150, function (err, text) {
                    if (err) { return console.log(err); }
                    Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
                        text.print(font, 0, 0, args, 650);
                        image.composite(text, 15, 5)
                        image.getBuffer(Jimp.AUTO, (err, buffer) => {
                            if (err) { return console.log(err); }
                            message.channel.sendFile(buffer)
                        })
                    });
                });
            });
        }
    }
}

module.exports = NutCommand;
