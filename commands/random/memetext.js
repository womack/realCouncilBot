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
        message.channel.send(reply);
         for (var i = 1; i < upperArgs.length; i++) {
            message.channel.send(upperArgs.charAt(i));
        }
    }
}

module.exports = MemeTextCommand;
