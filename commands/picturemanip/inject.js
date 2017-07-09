
const commando = require("discord.js-commando");
const Jimp = require("Jimp");

class InjectCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "inject",
            group: "picturemanip",
            memberName: "inject",
            description: "Inject someone! @Mention"
        });
    }
    async run(message, args) {
        args = args.split(">")[1].trim();
        if (message.mentions.users.first()) {
            let authorURL = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(0, -5) + ".png" : message.author.displayAvatarURL;
            let targetPerson = message.mentions.users.first();
            let targetURL = targetPerson.displayAvatarURL.endsWith(".webp") ? targetPerson.displayAvatarURL.slice(0, -5) + ".png" : targetPerson.displayAvatarURL;
            Jimp.read("./resources/images/injection.jpg", (err, image) => {
                if (err) { return console.log(err); }
                Jimp.read(authorURL, (err, author) => {
                    if (err) { return console.log(err); }
                    author.resize(50, 50);
                    Jimp.read(targetURL, (err, target) => {
                        if (err) { return console.log(err); }
                        target.resize(50, 50);
                        target.rotate(-8);
                        image.composite(author, 245, 45);
                        image.composite(target, 15, 60);
                        let text = new Jimp(1280, 800, function (err, text) {
                            if (err) { return console.log(err); }
                            Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then((font) => {
                                text.print(font, 0, 0, args, 400);
                                image.composite(text, 180, 110);
                                image.getBuffer(Jimp.AUTO, (err, buff) => {
                                    if (err) { return console.log(err); }
                                    message.channel.sendFile(buff);
                                });
                            });
                        });
                    });
                });
            });
        }
    }
}

module.exports = InjectCommand;
