const sendNotification = require('../functions/sendNotification.js');
const Guilds = require('../schemas/Guilds.schema.js');

const sendAllNotification = (client, bgType, userName) => {
	client.guilds.cache.forEach((guild) => {
		Guilds.findOne({ guildId: guild.id }).then(res => {
			if (!res) return;
			if (!res.notification) return;
			else {
				let channels = guild.channels.cache.filter((channel) => { return (channel.id === res.channelId); }).array();
				if (channels && channels.length > 0) {
					channels = channels.sort((a, b) => { return a.calculatedPosition - b.calculatedPosition;}); 
					if (channels[0].permissionsFor(guild.me).has(["SEND_MESSAGES"]))
						sendNotification(channels[0], bgType, res.guildName, res.language, res.role, userName);
				}
				else return;
			}
		})
	})
}

module.exports = sendAllNotification;