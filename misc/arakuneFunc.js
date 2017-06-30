const masterQuotes = require("../resources/quotes.js");
const Markovchain = require("markovchain");
const fs = require("fs");
const markovQuotes = new Markovchain(fs.readFileSync("resources/arakune.txt", "utf8"));
const starters = ["im", "i", "the", "Im", "The", "we"];
const adminList = require("../resources/adminList.js");
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
var resetDate = function () {
    pauseDate = new Date();
};
var setPause = function (duration) {
    pauseDate.setHours(pauseDate.getHours() + duration);

};
var getNumberFromArgs = function (args, wordToRemove) {
    var tmp = parseInt(args.toLowerCase().replace(wordToRemove, "").trim());
    if (isNaN(tmp) || tmp <= 0) {
        tmp = 1;
    }
    return tmp;
};
var allowedToRun = function () {
    return new Date().getTime() >= pauseDate.getTime();
};

module.exports = {
    allowedToRun,
    getNumberFromArgs,
    setPause,
    resetDate,
    isAllowed,
    getQuote,
    markovQuote,
    quote,
    findQuote
};
