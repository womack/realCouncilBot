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
        //    console.log(message.guild.roles);

        var c = message.guild.roles;
        for (var i in c) {
            console.log(i);
        }
        console.log(c[0].name);
        var guild = message.guild;
        if (args === "new role")
            guild.member(message.author).addRole('327936281747259402').catch(error => console.log(error));


    }
}

module.exports = AssignRoleCommand;
