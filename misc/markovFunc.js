const Markovchain = require("markovchain");
const fs = require("fs");
const starters = ["im", "i", "the", "Im", "The", "we"];
const notScared = ["womackx", "randler", "bloods", "arakune", "rifletown", "213213", "hansalel", "maylon"];

let startQuote = function (name) {
    let markovQuotes = null;
    try {
        markovQuotes = new Markovchain(fs.readFileSync(`resources/quotes/${name}.txt`, "utf8"));
    }
    catch (err) {
        console.log(err);
    }
    if (markovQuotes == null || !notScared.includes(name.toLowerCase())) {
        return "Not found, or too scared";
    }
    return markovQuote(markovQuotes);
};

let markovQuote = function (markovQuotes) {
    const startNum = Math.floor(Math.random() * starters.length);
    let quote = markovQuotes.start(starters[startNum]).end().process();
    if (quote == null || quote.length > 2000 || quote.length < 15) {
        quote = markovQuote(markovQuotes);
    }
    return quote;
}

let listMarkovs = function () {
    let reply = "People who aint vulnerable baboos\n";
    notScared.forEach((a) => reply += a + "\n");
    return reply;
}

let searchFiles = function (name) {
    return fs.readdirSync("./resources/quotes/").map((a) => a.replace(".txt", "")).find((b) => b.toLowerCase().includes(name.toLowerCase()));
}

module.exports = {
    markovQuote,
    listMarkovs,
    searchFiles,
    startQuote
}
