const commando = require("discord.js-commando");

class MemeTextCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "memetext",
            group: "random",
            memberName: "memetext",
            description: "Makes some M E M E T E X T"
        });
    }

    async run(message, args) {
        let reply = "";
        let upperArgs = args.toUpperCase();
        for (let i = 0; i < upperArgs.length; i++) {
            reply += upperArgs.charAt(i) + " ";
        }
        for (let i = 1; i < upperArgs.length; i++) {
            reply += upperArgs.charAt(i) + "\n";
        }
        message.channel.send(reply);
    }
}

module.exports = MemeTextCommand;
