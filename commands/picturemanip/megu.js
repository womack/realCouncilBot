const commando = require("discord.js-commando");
const Jimp = require("jimp");

class NutCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "megu",
            group: "picturemanip",
            memberName: "megu",
            description: "Megu is life"
        });
    }
    async run(message, args) {
        if (args) {
            Jimp.read("./resources/images/megu1.png", (err, image) => {
                if (err) { return console.log(err); }
                let text = new Jimp(1280, 800, function (err, text) {
                    if (err) { return console.log(err); }
                    Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(function (font) {
                        text.print(font, 0, 0, args, 1300);
                        image.composite(text, 50, 430);
                        image.getBuffer(Jimp.AUTO, (err, buffer) => {
                            if (err) { return console.log(err); }
                            message.channel.sendFile(buffer);
                        });
                    });
                });
            });
        }
    }
}

module.exports = NutCommand;
