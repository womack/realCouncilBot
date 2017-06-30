const commando = require("discord.js-commando");
const masterQuotes = require("../../resources/quotes.js");
var Markovchain = require("markovchain");
var fs = require("fs");
var markovQuotes = new Markovchain(fs.readFileSync("resources/arakune.txt", "utf8"));
var starters = ["im", "i", "the", "Im", "The", "we"];

var quote = function (quotesInput) {
  return quotesInput[Math.floor(Math.random() * quotesInput.length)];
};

var findQuote = function (name, quotes) {
  var tmpquotes = [];
  if (name.includes("arak")) {
    tmpquotes.push("i'd never insult a god");
  }
  else {
    for (var i = 0; i < quotes.length; i++) {
      if (quotes[i].toLowerCase().includes(name.toLowerCase())) {
        tmpquotes.push(quotes[i]);
      }
    }
    if (tmpquotes.length < 1) {
      tmpquotes.push("idk who that even is");
    }
  }
  return quote(tmpquotes);
};

var markovQuote = function () {
  var startNum = Math.floor(Math.random() * starters.length);
  var quote = markovQuotes.start(starters[startNum]).end().process();
  if (quote.length > 2000 || quote.length < 2) {
    quote = markovQuote();
  }
  return quote;
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
    if (args.includes("markov")) {
      message.channel.send(markovQuote());
    }
    else if (args.includes("insult")) {
      message.channel.send(
        findQuote(args.replace("insult ", ""), masterQuotes.quotes)
      );
    } else if (args.toLowerCase() === "ah") {
      message.channel.send("https://en.wikipedia.org/wiki/Ad_hominem");
    }
    else {
      message.channel.send(quote(masterQuotes.quotes));
    }
  }
}

module.exports = ArakuneQuoteCommand;
