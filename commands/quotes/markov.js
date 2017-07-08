const commando = require("discord.js-commando");
const markovFunc = require("../../misc/markovFunc");


class MarkovCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "markov",
            group: "quotes",
            memberName: "markov",
            description: "Generates a markov quote for a realcouncil individual e.g. !markov womackx"
        });
    }

    async run(message, args) {
        let reply = "";
        if (args === "list") {
            reply = markovFunc.listMarkovs();
        }
        else {
            reply = markovFunc.startQuote(markovFunc.searchFiles(args));
        }
        message.channel.send(reply);
    }
}

module.exports = MarkovCommand;
