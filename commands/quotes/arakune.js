const commando = require("discord.js-commando");
const arakuneFunc = require("../../misc/arakuneFunc");

class ArakuneQuoteCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "arakune",
      group: "quotes",
      memberName: "arakune",
      description: "Spouts a glorious Arakune quote!\n Use insult <name> to refine your quote!"
    });
  }

  async run(message, args) {

    if (args !== null && args.toLowerCase().includes("unpause") && arakuneFunc.isAllowed(message.author.username)) {
      arakuneFunc.resetDate();
    }
    else if (args !== null && args.toLowerCase().includes("pause") && arakuneFunc.isAllowed(message.author.username)) {
      arakuneFunc.setPause(arakuneFunc.getNumberFromArgs(args));
    }
    else if (arakuneFunc.allowedToRun()) {
      message.channel.send(arakuneFunc.getQuote(args));
    }


  }
}

module.exports = ArakuneQuoteCommand;
