const commando = require("discord.js-commando");
const memeFunc = require("../../misc/memeTextFunc");
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
        message.channel.send(memeFunc.memeText(args));
    }
}

module.exports = MemeTextCommand;
