const commando = require("discord.js-commando");
const masterQuotes = require("../../resources/quotes.js");

var quote = function(quotesInput) {
  return quotesInput[Math.floor(Math.random() * quotesInput.length)];
};

var findQuote = function(name, quotes) {
  var tmpquotes = [];
  for (var i = 0; i < quotes.length; i++) {
    if (quotes[i].includes(name)) {
      tmpquotes.push(quotes[i]);
    }
  }
  if (name.includes("arak")) {
    return "i'd never insult a god";
  } else if (tmpquotes.length < 1) {
    return "idk who that even is";
  } else {
    return quote(tmpquotes);
  }
};

class ArakuneQuoteCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "arakune",
      group: "quotes",
      memberName: "arakune",
      description:
        "Spouts a glorious Arakune quote!\n Use insult <name> to refine your quote!"
    });
  }

  async run(message, args) {
    if (args.includes("insult")) {
      message.channel.send(
        findQuote(args.replace("insult ", ""), masterQuotes.quotes)
      );
    } else {
      message.channel.send(quote(masterQuotes.quotes));
    }
  }
}

module.exports = ArakuneQuoteCommand;
