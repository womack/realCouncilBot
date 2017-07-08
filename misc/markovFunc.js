const Markovchain = require("markovchain");
const fs = require("fs");
const starters = ["im", "i", "the", "Im", "The", "we"];
const notScared = ["womackx", "randler", "bloods", "arakune", "rifletown"];


let markovQuote = function (name) {
    let markovQuotes = null;
    try {
        markovQuotes = new Markovchain(fs.readFileSync(`resources/quotes/${name}.txt`, "utf8"));
    }
    catch (err) { }
    if (markovQuotes == null || markovQuotes == undefined || !notScared.includes(name.toLowerCase())) {
        return "Not found, or too scared";
    }
    const startNum = Math.floor(Math.random() * starters.length);
    let quote = markovQuotes.start(starters[startNum]).end().process();
    if (quote == null || quote.length > 2000 || quote.length < 15) {
        quote = markovQuote(name);
    }
    return quote;
};

let listMarkovs = function () {
    let reply = "People who aint vulnerable baboos\n";
    notScared.forEach((a) => reply += a + "\n");
    return reply;
}

module.exports = {
    markovQuote,
    listMarkovs
}
