const commando = require("discord.js-commando");
const publicIp = require("public-ip");

class CheckIPCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "checkip",
            group: "admin",
            memberName: "checkip",
            description: "Returns the external IP of the machine the bot is running on"
        });

    }

    async run(message, args) {
        if (message.author.username === "womackx") {
            publicIp.v4().then((ip) => {
                message.reply(ip);
            });
        }
    }
}

module.exports = CheckIPCommand;
