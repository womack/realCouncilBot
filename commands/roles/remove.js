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
        let role = message.guild.roles.find((role) => role.name.toLowerCase() === args.toLowerCase());
        if (role !== null && message.member.roles.has(role.id)) {
            message.member.removeRole(role).catch();
        }
    }
}

module.exports = RemoveRoleCommand;
