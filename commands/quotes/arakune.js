const commando = require("discord.js-commando");

const masterQuotes = require("../../resources/quotes.js");


class ArakuneQuoteCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "arakune",
            group: "quotes",
            memberName: "arakune",
            description: "Spouts a glorious arakune quote"
        });
    }

    async run(message, args) {
        if (args.includes("insult")) {
            message.channel.send(findQuote(args.replace("insult ", ""), masterQuotes.quotes));
        }
        else {
            message.channel.send(quote(masterQuotes.quotes));
        }
    }
}


var quote = function (quotesInput) {
    var a = Math.floor(Math.random() * quotesInput.length);
    return quotesInput[a]
}

var findQuote = function (name, quotes) {
    var tmpquotes = "idk who that even is".split("\n");
    for (var i = 0; i < quotes.length; i++) {
        var tmp = quotes[i];
        if (tmp.includes(name)) {
            tmpquotes.push(tmp);
        }
    }
    return quote(tmpquotes);
}

module.exports = ArakuneQuoteCommand;