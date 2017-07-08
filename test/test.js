const assert = require("assert");
const arakuneFunc = require("../misc/arakuneFunc.js");

describe("Arakune Find Quote Tests", function () {

    describe("#Correct list", function () {
        it("Given a set of quotes and a word to search, it should return the correct one.", function () {
            let tmpList = ["bob", "jeff is cool", "arakune"];
            assert.equal("jeff is cool", arakuneFunc.findQuote("jeff", tmpList));
            assert.equal("bob", arakuneFunc.findQuote("bob", tmpList));
            assert.equal("arakune", arakuneFunc.findQuote("ara", tmpList));
            assert.equal("arakune", arakuneFunc.findQuote("ara", tmpList));
        });
    });

    describe("#Incorrect search", function () {
        it("Given a word that doesnt exist, it should return the default message", function () {
            let tmpList = ["bob", "jeff is cool", "arakune"];
            assert.equal("idk who that even is", arakuneFunc.findQuote("hi", tmpList));
        });
    });

    describe("#God quote", function () {
        it("Given a word that matches arakunes name, should spout default message", function () {
            let tmpList = ["bob", "jeff is cool", "arakune"];
            assert.equal("i'd never insult a god", arakuneFunc.findQuote("arak", tmpList));
        });
    });

    describe("Markov returns something", function () {
        it("Should just return something, cant test actual output", function () {
            assert.notEqual(arakuneFunc.markovQuote().length, 0);
        });
    });

    describe("Given a message that has numbers and words in it, should return the number", function () {
        it("Should return the number in the string", function () {
            assert.equal(arakuneFunc.getNumberFromArgs("jeff 123"), 123);
            assert.equal(arakuneFunc.getNumberFromArgs("213 jeff"), 213);
            assert.equal(arakuneFunc.getNumberFromArgs("jeff 123"), 123);
            assert.equal(arakuneFunc.getNumberFromArgs("b1o2b3"), 123);
            assert.notEqual(arakuneFunc.getNumberFromArgs("123"), 0);
        });
    });

    describe("Tests if a username is allowed to run admin commands or not", function () {
        it("Should return true or false depending on username", function () {
            assert.equal(arakuneFunc.isAllowed("nyy"), true);
            assert.equal(arakuneFunc.isAllowed("jeff"), false);
            assert.equal(arakuneFunc.isAllowed("womackx"), true);
            assert.equal(arakuneFunc.isAllowed("arakune"), false);
        });
    });

});
