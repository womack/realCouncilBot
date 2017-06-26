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
        var role = message.guild.roles.find("name", args);
        if (!message.member.roles.has(role.id)) {
            message.member.addRole(role);
        }
    }
}

module.exports = AssignRoleCommand;
