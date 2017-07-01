const assert = require("assert");
const arakuneFunc = require("../misc/arakuneFunc.js");


describe('Arakune Find Quote Tests', function () {
    describe('#Correct list', function () {
        it('Given a set of quotes and a word to search, it should return the correct one.', function () {
            var tmpList = ["bob", "jeff is cool", "arakune"];
            assert.equal("jeff is cool", arakuneFunc.findQuote("jeff", tmpList));
            assert.equal("bob", arakuneFunc.findQuote("bob", tmpList));
            assert.equal("arakune", arakuneFunc.findQuote("ara", tmpList));
            assert.equal("arakune", arakuneFunc.findQuote("ara", tmpList));

        })
    })
    describe('#Incorrect search', function () {
        it('Given a word that doesnt exist, it should return the default message', function () {
            var tmpList = ["bob", "jeff is cool", "arakune"];
            assert.equal("idk who that even is", arakuneFunc.findQuote("hi", tmpList));
        })
    })
    describe('#God quote', function () {
        it('Given a word that matches arakunes name, should spout default message', function () {
            var tmpList = ["bob", "jeff is cool", "arakune"];
            assert.equal("i'd never insult a god", arakuneFunc.findQuote("arak", tmpList));
        })
    })
    describe("Markov returns something", function () {
        it("Should just return something", function () {
            assert.notEqual(arakuneFunc.markovQuote().length, 0);
        })
    })
});
