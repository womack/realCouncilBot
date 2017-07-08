const masterQuotes = require("../resources/quotes.js");
const Markovchain = require("markovchain");
const fs = require("fs");
const markovQuotes = new Markovchain(fs.readFileSync("resources/arakune.txt", "utf8"));
const starters = ["im", "i", "the", "Im", "The", "we"];
const adminList = require("../resources/adminList.js");
const pauseDate = new Date();

let quote = function (quotesInput) {
    return quotesInput[Math.floor(Math.random() * quotesInput.length)];
};

let findQuote = function (name, quotes) {
    let tmpQuotes = [];
    if (name.includes("arak")) {
        tmpQuotes.push("i'd never insult a god");
    }
    else {
        tmpQuotes = quotes.filter((a) => a.toLowerCase().includes(name.toLowerCase()));
        if (tmpQuotes.length < 1) {
            tmpQuotes.push("idk who that even is");
        }
    }
    return quote(tmpQuotes);
};

let markovQuote = function () {
    const startNum = Math.floor(Math.random() * starters.length);
    let quote = markovQuotes.start(starters[startNum]).end().process();
    if (quote.length > 2000 || quote.length < 2) {
        quote = markovQuote();
    }
    return quote;
};

let getQuote = function (args) {
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

let isAllowed = function (username, list = adminList.list) {
    return list.includes(username);
};

let resetDate = function () {
    pauseDate = new Date();
};

let setPause = function (duration) {
    pauseDate.setHours(pauseDate.getHours() + duration);
};

let getNumberFromArgs = function (args) {
    return parseInt(args.replace(/[A-|a-z$-]/g, ""));
};

let allowedToRun = function (date = pauseDate) {
    return new Date().getTime() >= date.getTime();
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
