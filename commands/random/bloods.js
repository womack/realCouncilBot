const commando = require("discord.js-commando");
const countDownDate = new Date("July 14, 2017 20:37:25").getTime();

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
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        message.channel.send(args + " " + days + " DAYS " + hours + " HOURS " + minutes + " MINUTES " + seconds + " SECONDS UNTIL B L O O D S IS UNMUTED" + args);
    }
}

module.exports = BloodsCountdownCommand;
