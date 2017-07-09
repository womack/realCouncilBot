const commando = require("discord.js-commando");
const sim = require("string-similarity");
const request = require("request");
let cur = {};


let shuffleArray = function (array) {
    let currentIndex = array.length, tempVal, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        tempVal = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempVal;
    }
    return array;
}
class TriviaCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "gametrivia",
            group: "random",
            memberName: "gametrivia",
            description: "Hosts a trivia game!"
        });
    }

    async run(message, args) {
        if (cur[message.channel.id]) return send("**Wait for the current trivia game to complete**")
        cur[message.channel.id] = true;
        let qr = request("https://opentdb.com/api.php?amount=1&category=15", function (err, res, body) {
            if (err) return console.log(err);
            let quiz = JSON.parse(body);
            let correctAnswer = quiz.results[0].correct_answer.toLowerCase().replace(/[^\x00-\x7F]/g, "");
            let question = quiz.results[0].question.replace(/[^\x00-\x7F]/g, "").replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '').replace(/[\uE000-\uF8FF]/g, "").replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, "");
            question = question.replace(/&quot;/g, "\"").replace(/&#039;/g, "\'");
            let answers = quiz.results[0].incorrect_answers.map((a) => a.replace(/[^\x00-\x7F]/g, ""));
            answers.push(correctAnswer);
            answers = shuffleArray(answers);
            let embed = {
                "title": "`Video Game trivia`",
                "color": 0x50FF38,
                "description": "You have 30 seconds to answer the question.",
                "author": {
                    "name": message.guild.name,
                    "icon_url": message.guild.iconURL
                },
                "fields": [{
                    "name": "Category",
                    "value": quiz.results[0].category
                }, {
                    "name": "Question",
                    "value": question ? question : "Api Error"
                }]
            };
            for (let i = 0; i < answers.length; i++) {
                let tmpAnswer = {
                    "name": "Answer " + (i + 1),
                    "value": answers[i]
                }
                embed.fields.push(tmpAnswer);
            }
            message.channel.send("", {
                embed
            });
            const collector = message.channel.createCollector(m => m.author.bot === false, {
                time: 30000,
            });
            collector.on('collect', (m) => {
                let same = sim.compareTwoStrings(correctAnswer, m.content.toLowerCase());
                if (same > .65) {
                    collector.stop([m.author.username, m.author.id]);
                }
            });
            collector.on('end', (collected, reason) => {
                delete cur[message.channel.id];
                if (reason === "time") {
                    message.channel.send("The 30 seconds are up, the correct answer was: " + correctAnswer);
                } else {
                    message.channel.send("**Correct!** " + reason[0] + " has answered the question with " + correctAnswer + "!");
                }
            });
        });
    }
}

module.exports = TriviaCommand;
