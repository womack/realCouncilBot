const commando = require("discord.js-commando");

class RemoveRoleCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "remove",
            group: "roles",
            memberName: "remove",
            description: "Removes a specific role"
        });

    }

    async run(message, args) {

    }
}

module.exports = RemoveRoleCommand;