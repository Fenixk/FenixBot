const createEmbed = require('../functions/createEmbed.js');
const bgDescriptors = require('../constants/battleground-descriptors');

const updateNotifications = (channel, bgType, statusType) => {
	let botMessages;
	channel.messages.fetch({ limit: 100 }).then(messages => {
		botMessages = messages.filter(msg => msg.author.bot);
		if (botMessages.array().length > 0){
			// Find the good Embed with status recap.
			for (let i=0; i < botMessages.array().length; i++){
				if (botMessages.array()[i].embeds[0] && botMessages.array()[i].embeds[0].title === bgDescriptors[bgType].title) {
					const statusEmbed = createEmbed(bgType, 'orange');
					botMessages.array()[i].edit(statusEmbed);
				}
			}
		}
	})
	.catch(e => console.error(e));

	return botMessages;
	
}

module.exports = updateNotifications;