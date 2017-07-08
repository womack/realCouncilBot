const Markovchain = require("markovchain");
const fs = require("fs");
const starters = ["im", "i", "the", "Im", "The", "we"];

let markovQuote = function (name) {
    const markovQuotes = new Markovchain(fs.readFileSync(`resources/quotes/${name}.txt`, "utf8"));
    const startNum = Math.floor(Math.random() * starters.length);
    let quote = markovQuotes.start(starters[startNum]).end().process();
    if (quote.length > 2000 || quote.length < 2) {
        quote = markovQuote();
    }
    return quote;
};

module.exports = {
    markovQuote
}
