const commando = require("discord.js-commando");
const adminList = require("../../resources/adminList.js");

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

        if (adminList.list.indexOf(message.author.username) != -1) {
            if (args == "!arakune") {
                clearCommandSpam(message, args);
            }
            else if (args != "") {
                clearIDSpam(message, "325756885955379211", args);
            }
        }
    }
}


function clearIDSpam(message, id, amount) {
    message.channel.fetchMessages({
    }).then((messages) => {

        messages = messages.filter((m) => String(m.author.id) == id).array().slice(0, amount);
        message.channel.bulkDelete(messages);
        //  .array().slice(0, clearA);
        // messages = messages.filter(m => m.author.id === filterBy).array().slice(0, clearA);
    }).catch();
}
function clearCommandSpam(message, command) {
    message.channel.fetchMessages({
    }).then((messages) => {
        messages = messages.filter((m) => m.content == command);
        message.channel.bulkDelete(messages);
    }).catch();
}


module.exports = ClearCommand;
