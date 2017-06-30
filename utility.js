module.exports = {
    getNumberFromArgs: function (args, wordToRemove) {
        var tmp = parseInt(args.replace(wordToRemove, "").trim());
        if (isNaN(tmp) || tmp <= 0) {
            tmp = 1;
        }
        return tmp;
    },
    allowedToRun: function (date) {
        return new Date().getTime() >= date.getTime();
    }
}
