const commando = require("discord.js-commando");
const arakuneFunc = require("../../misc/arakuneFunc.js");

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
    if (args != null && args.toLowerCase().includes("unpause") && arakuneFunc.isAllowed(message)) {
      arakuneFunc.resetDate();
    }
    else if (args != null && args.toLowerCase().includes("pause") && arakuneFunc.isAllowed(message)) {
      arakuneFunc.setPause(arakuneFunc.getNumberFromArgs(args, "pause"));
    }
    else if (arakuneFunc.allowedToRun()) {
      message.channel.send(arakuneFunc.getQuote(args));
    }
  }
}

module.exports = ArakuneQuoteCommand;
