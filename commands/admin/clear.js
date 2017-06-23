const commando = require("discord.js-commando");
const adminList = require("./adminList.js");

class ClearCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "clear",
            group: "admin",
            memberName: "clear",
            description: "Clears some messages"
        });

    }

    async run(message, args) {
        console.log(adminList.list);
        if (adminList.contains(message.author.username)) {


            message.channel.fetchMessages({

            }).then((messages) => {
                messages = messages.filter(m => String(m.author.id) == "325756885955379211");
                message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
                //.array().slice(0, clearA);
                //  messages = messages.filter(m => m.author.id === filterBy).array().slice(0, clearA);
            });
        }
    }
}


module.exports = ClearCommand;
