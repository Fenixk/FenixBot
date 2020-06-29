const sendStatus = require("../functions/sendStatus.js");

module.exports = {
	name: "status",
	description: "Send battleground general status to the user.",
	aliases: ["status", "init", "install"],
	execute(client, message) {
		sendStatus(message.channel);
		return ;
	}
};
