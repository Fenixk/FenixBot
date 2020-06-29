const bgDescriptors = require('../constants/battleground-descriptors');

const removeNotification = (channel, bgType, guild) => {
	let botMessages;

	channel.messages.fetch({ limit: 100 }).then(messages => {
		botMessages = messages.filter(msg => msg.author.bot);
		if (botMessages.array().length > 0){
			// Find the good Embed with status recap.
			for (let i=0; i < botMessages.array().length; i++){
				if (botMessages.array()[i].embeds && botMessages.array()[i].embeds[0] && botMessages.array()[i].embeds[0].title === bgDescriptors[bgType].title) {
					console.log('Delete notification for ' + guild);
					botMessages.array()[i].delete().catch(e => console.log('Failed to delete embed for removeNotification in ' + guild));
				}
			}
		}
		return;
	})
	.catch(e => console.log('Failed to fetch message for removeNotification in ' + guild));

	return;
}

module.exports = removeNotification;