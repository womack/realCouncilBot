const commando = require("discord.js-commando");
const masterQuotes = require("../../resources/quotes.js");
const Markovchain = require("markovchain");
const fs = require("fs");
const markovQuotes = new Markovchain(fs.readFileSync("resources/arakune.txt", "utf8"));
const starters = ["im", "i", "the", "Im", "The", "we"];
const utilityMethods = require("../../utility.js");
const adminList = require("../../resources/adminList.js");
var pauseDate = new Date();

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


var getQuote = function (args) {
  if (args.includes("markov")) {
    return markovQuote();
  }
  else if (args.includes("insult")) {
    return findQuote(args.replace("insult ", ""), masterQuotes.quotes);
  }
  else {
    return quote(masterQuotes.quotes);
  }
};
var isAllowed = function (message) {
  return adminList.list.includes(message.author.username);
};

class ArakuneQuoteCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "arakune",
      group: "quotes",
      memberName: "arakune",
      description: "Spouts a glorious Arakune quote!\n Use insult <name> to refine your quote!"
    });
  }

  async run(message, args) {


    if (args != null && args.toLowerCase().includes("unpause") && isAllowed(message)) {
      pauseDate = new Date();
    }
    else if (args != null && args.toLowerCase().includes("pause") && isAllowed(message)) {
      pauseDate = new Date();
      pauseDate.setHours(pauseDate.getHours() + utilityMethods.getNumberFromArgs(args.toLowerCase(), "pause"));
    }
    else if (utilityMethods.allowedToRun(pauseDate)) {
      message.channel.send(getQuote(args));
    }
  }
}

module.exports = ArakuneQuoteCommand;
