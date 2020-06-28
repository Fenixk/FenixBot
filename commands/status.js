const sendStatus = require("../functions/sendStatus.js");

module.exports = {
  name: "status",
  description: "Test embed for a specific battlegrounds.",
  aliases: ["status", "init", "install"],
  execute(client, message) {
    sendStatus(message.channel);
    return ;
  }
};
