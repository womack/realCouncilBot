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
        var reply = "";
        var upperArgs = args.toUpperCase();
        for (var i = 0; i < upperArgs.length; i++) {
            reply += upperArgs.charAt(i) + " ";
        }
        reply += "\n";

        for (var j = 1; j < upperArgs.length; j++) {
            reply += upperArgs.charAt(j) + "\n";
        }
        message.channel.send(reply);
    }
}

module.exports = MemeTextCommand;
