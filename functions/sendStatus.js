const createEmbedCompact = require('../functions/createEmbedCompact.js');
const Status = require("../schemas/Status.schema.js");

const sendStatus = (channel, language) => {

	Guilds.findOne({ guildId: channel.guild_id }).then(res => {
		if (!res) return;
		else {
			Status.findOne({ id: "1" }).then(status => {
				const statusEmbed = createEmbedCompact(status, language);
				channel.send(statusEmbed, res.language);
			});
		}
	})
}

module.exports = sendStatus;