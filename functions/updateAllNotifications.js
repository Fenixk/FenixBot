const updateNotifications = require("../functions/updateNotifications.js");
const Guilds = require('../schemas/Guilds.schema.js');
const Status = require('../schemas/Status.schema.js');

const updateAllNotifications = (client, bgType, color) => {

	Status.findOne({ id: "1" }).then(status => {
		let updateTime;
		if (color === "orange") updateTime = status['last' + bgType];

		client.guilds.cache.forEach((guild) => {
			Guilds.findOne({ guildId: guild.id }).then(res => {
				if (!res) return;
				if (!res.notification) return;
				else {
					let channels = guild.channels.cache.filter((channel) => { return (channel.id === res.channelId); }).array();
					if (channels && channels.length > 0) {
						channels = channels.sort((a, b) => { return a.calculatedPosition - b.calculatedPosition;}); 
						if (channels[0].permissionsFor(guild.me).has(["SEND_MESSAGES"]))
							updateNotifications(channels[0], bgType, res.language, color, updateTime);
					}
					else return;
				}
			})
		})
	});
};

module.exports = updateAllNotifications;
