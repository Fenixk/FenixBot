const bgDescriptors = require('../constants/battleground-descriptors');

const removeNotification = (channel, bgType, guild, language) => {
	let botMessages;

	channel.messages.fetch({ limit: 100 }).then(messages => {
		botMessages = messages.filter(msg => msg.author.bot);
		if (botMessages.array().length > 0){
			// Find the good Embed with status recap.
			for (let i=0; i < botMessages.array().length; i++){
				if (botMessages.array()[i].embeds[0] && botMessages.array()[i].embeds[0].title === bgDescriptors[language][bgType].title) {
					botMessages.array()[i].delete()
					.then(res => console.log('Delete notification for ' + guild))
					.catch(e => console.log('Failed to delete embed for removeNotification in ' + guild));
				}
			}
		}
		return;
	})
	.catch(e => console.log('Failed to fetch message for removeNotification in ' + guild));

	return;
}

module.exports = removeNotification;