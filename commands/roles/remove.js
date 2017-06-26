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
        var role = message.guild.roles.find(checkRole);
        if (role !== null && message.member.roles.has(role.id)) {
            message.member.removeRole(role).catch();
        }

        function checkRole(elem) {
            return elem.name.toLowerCase() === args.toLowerCase();
        }
    }
}

module.exports = RemoveRoleCommand;
