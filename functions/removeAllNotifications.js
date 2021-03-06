const removeNotification = require('../functions/removeNotification.js');
const Guilds = require('../schemas/Guilds.schema.js');

const removeAllNotification = (client, bgType) => {
	client.guilds.cache.forEach((guild) => {
		Guilds.findOne({ guildId: guild.id }).then(res => {
			if (!res) return;
			let channels = guild.channels.cache.filter((channel) => { return (channel.id === res.channelId); }).array();
			if (channels && channels.length > 0) {
				channels = channels.sort((a, b) => { return a.calculatedPosition - b.calculatedPosition;}); 
				removeNotification(channels[0], bgType, res.guildName, res.language);
			}
			else return;
		})
	})
}
module.exports = removeAllNotification;