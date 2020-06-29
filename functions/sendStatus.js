const createEmbedCompact = require('../functions/createEmbedCompact.js');
const Status = require("../schemas/Status.schema.js");

const sendStatus = (channel) => {
	Status.findOne({ id: "1" }).then(status => {
		const statusEmbed = createEmbedCompact(status);
		channel.send(statusEmbed);
	});
}

module.exports = sendStatus;