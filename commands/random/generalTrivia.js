const commando = require("discord.js-commando");
const sim = require("string-similarity");
const request = require("request");
let cur = {};

class TriviaCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "generaltrivia",
            group: "random",
            memberName: "generaltrivia",
            description: "Hosts a trivia game!"
        });

    }

    async run(message) {
        if (cur[message.channel.id]) {
            return message
                .channel
                .send("**Wait for the current trivia game to complete**")
        }
        cur[message.channel.id] = true;
        request("http://jservice.io/api/random", function (err, res, body) {
            if (err) {
                return console.log(err);
            }
            let quiz = JSON.parse(body);
            let embed = {
                "title": "`Random Trivia`",
                "color": 0x50FF38,
                "description": "You have 30 seconds to answer the question.",
                "author": {
                    "name": message.guild.name,
                    "icon_url": message.guild.iconURL
                },
                "fields": [
                    {
                        "name": "Category",
                        "value": quiz[0].category.title
                    }, {
                        "name": "Question",
                        "value": quiz[0].question
                            ? quiz[0].question
                            : "Api Error"
                    }
                ]
            };
            message
                .channel
                .send("", {embed});
            const collector = message
                .channel
                .createCollector((m) => m.author.bot === false, {time: 30000});
            collector.on("collect", (m) => {
                let same = sim.compareTwoStrings(quiz[0].answer.toLowerCase(), m.content.toLowerCase());
                if (same > .65) {
                    collector.stop([m.author.username, m.author.id]);
                }
            });
            collector.on("end", (collected, reason) => {
                delete cur[message.channel.id];
                if (reason === "time") {
                    message
                        .channel
                        .send("The 30 seconds are up, the correct answer was: " + quiz[0].answer);
                } else {
                    message
                        .channel
                        .send("**Correct!** " + reason[0] + " has answered the question!");
                }
            });
        });
    }
}

module.exports = TriviaCommand;
