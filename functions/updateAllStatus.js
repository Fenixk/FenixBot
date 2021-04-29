const updateStatus = require("../functions/updateStatus.js");
const Status = require("../schemas/Status.schema.js");
const Guilds = require('../schemas/Guilds.schema.js');

const updateAllStatus = (client, bgType, statusType) => {
	console.log('Update Status to ' + statusType + ' for ' + bgType);

	// First Update Database.
	Status.findOne({ id: "1" }).then(status => {
		status[bgType] = statusType;
		if (statusType === "green") status[`last${bgType}`] = Date.now();
		Status.findOneAndUpdate({ _id: status._id }, status).then(new_status => {
			client.guilds.cache.forEach(guild => {
				Guilds.findOne({ guildId: guild.id }).then(res => {
					if (!res) return;
					let channels = guild.channels.cache.filter(channel => { return channel.id === res.channelId;}).array();
					if (channels && channels.length > 0) {
						channels = channels.sort((a, b) => { return a.calculatedPosition - b.calculatedPosition; });
						updateStatus(channels[0], status, res.guildName, res.language);
					}
				});
			});
		});
	});
};

module.exports = updateAllStatus;
