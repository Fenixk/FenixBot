const sendNotification = require('../functions/sendNotification.js');
const Guilds = require('../schemas/Guilds.schema.js');

const sendAllNotification = (client, bgType) => {
	client.guilds.cache.forEach((guild) => {
		Guilds.findOne({ guildId: guild.id }).then(res => {
			if (!res) return console.log('Failed to find guild in database in sendAllNotification related to ' + guild.name);
			if (!res.notification) return console.log('Notifications are disabled for ' + res.guildName);
			else {
				let channels = guild.channels.cache.filter((channel) => { return (channel.id === res.channelId); }).array();
				if (channels && channels.length > 0) {
					channels = channels.sort((a, b) => { return a.calculatedPosition - b.calculatedPosition;}); 
					if (channels[0].permissionsFor(guild.me).has(["SEND_MESSAGES"]))
						sendNotification(channels[0], bgType, res.guildName);
				}
				else return;
			}
		})
	})
}

module.exports = sendAllNotification;