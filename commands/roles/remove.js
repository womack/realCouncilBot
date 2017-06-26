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
        var role = message.guild.roles.find("name", args);
        if (message.member.roles.has(role.id)) {
            message.member.removeRole(role).catch();
        }
    }
}

module.exports = RemoveRoleCommand;
