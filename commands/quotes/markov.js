const commando = require("discord.js-commando");
const markovFunc = require("../../misc/markovFunc");

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "markov",
            group: "quotes",
            memberName: "markov",
            description: "Generates a markov quote for a realcouncil individual e.g. !markov womackx"
        });
    }

    async run(message, args) {
        message.channel.send(markovFunc.markovQuote(args));
    }
}

module.exports = DiceRollCommand;
