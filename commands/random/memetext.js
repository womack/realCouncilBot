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
        let tmp = args.split("%");
        if (args[1]) {
            let numberTmp = tmp[1].split(",");
            message.channel.send("```" + memeFunc.memeGrid(numberTmp[0], numberTmp[1], tmp[0]) + "```");
        }
        else {
            message.channel.send(memeFunc.memeText(args));
        }
    }
}

module.exports = MemeTextCommand;
