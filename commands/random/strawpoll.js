const commando = require("discord.js-commando");
var request = require('request');


let makeStrawPoll = function (strawObj, message) {
    request.post({
        url: 'https://strawpoll.me/api/v2/polls',
        followAllRedirects: true,
        body: strawObj,
        json: true
    },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                message.channel.send(`https://strawpoll.me/${body.id}`);
            }
        }
    );
}

let argSplit = function (args) {
    let strawObj = {};
    if (args.includes("-") && args.includes(",")) {
        args = args.split("-");
        strawObj.title = args[0];
        strawObj.options = args[1].split(",");
    }
    else {
        strawObj = "Incorrect format, Title and two options are required";
    }
    return strawObj;
}

class StrawPollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "strawpoll",
            group: "random",
            memberName: "strawpoll",
            description: "Creates a strawpoll, <title>-<option1>,<option2>,<option3> ..."
        });
    }
    async run(message, args) {
        let splitArgs = argSplit(args);
        if (splitArgs === "Incorrect format, Title and two options are required") {
            message.channel.send(splitArgs);
        }
        else {
            makeStrawPoll(splitArgs, message);
        }

    }
}

module.exports = StrawPollCommand;





