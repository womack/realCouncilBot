const commando = require("discord.js-commando");
const urban = require("urban");
class UrbanSearchCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "urban",
            group: "random",
            memberName: "urban",
            description: "Finds an urban dictionary quote for your search"
        });

    }

    async run(message, args) {
        let search = urban(args);
        search.first(function (json) {
            if (json) {
                if (json.definition.length > 1000) { json.definition = json.definition.substr(0, 1000); }
                if (json.example.length > 1000) { json.example = json.example.substr(0, 1000); }
                message.channel.send("", {
                    "embed": {
                        "title": "**" + args + "**",
                        "url": json.permalink,
                        "color": 0xD71A75,
                        "author": {
                            "name": "Urban Dictionary",
                            "icon_url": message.guild.iconURL
                        },
                        "fields": [{
                            "name": "**Definition**",
                            "value": json.definition
                        }, {
                            "name": "**Example**",
                            "value": json.example
                        }]
                    }
                });
            } else {
                message.channel.send("**There were no results for this search term**");
            }
        });
    }
}

module.exports = UrbanSearchCommand;
