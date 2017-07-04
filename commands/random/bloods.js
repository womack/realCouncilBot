const commando = require("discord.js-commando");
//var countDownDate = new Date("July 14, 2017 20:37:25").getTime();
var countDownDate = new Date("July 3, 2017 00:00:00").getTime();
class BloodsCountdownCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "bloods",
            group: "random",
            memberName: "bloods",
            description: "Countdown till bloods unmute"
        });

    }

    async run(message, args) {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (days <= 0) {
            message.channel.send(args + " " + days + " DAYS " + hours + " HOURS " + minutes + " MINUTES " + seconds + " SECONDS UNTIL B L O O D S IS BACK" + args);
        } else {
            message.channel.send("He's back!!");
        }
    }
}

module.exports = BloodsCountdownCommand;
