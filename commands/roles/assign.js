const commando = require("discord.js-commando");

class AssignRoleCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "assign",
            group: "roles",
            memberName: "assign",
            description: "Assigns a specific role"
        });

    }

    async run(message, args) {
        let role = message.guild.roles.find((role) => role.name.toLowerCase() === args.toLowerCase());
        if (role !== null && !message.member.roles.has(role.id)) {
            message.member.addRole(role);
        }
    }
}

module.exports = AssignRoleCommand;
