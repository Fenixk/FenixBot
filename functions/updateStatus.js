const createEmbedCompact = require('../functions/createEmbedCompact.js');
const statusDescriptors = require('../constants/status-descriptors');

const updateStatus = (channel, status, guild, language) => {
	let botMessages;
	let exist = false;
	channel.messages.fetch({ limit: 100 }).then(messages => {
		botMessages = messages.filter(msg => msg.author.bot);
		if (botMessages.array().length > 0){
			// Find the good Embed with status recap.
			for (let i=0; i < botMessages.array().length; i++){
				if (botMessages.array()[i].embeds[0] && (
				botMessages.array()[i].embeds[0].title === statusDescriptors.fr.title || 
				botMessages.array()[i].embeds[0].title === statusDescriptors.en.title || 
				botMessages.array()[i].embeds[0].title === statusDescriptors.ru.title || 
				botMessages.array()[i].embeds[0].title === statusDescriptors.de.title )) {
					const statusEmbed = createEmbedCompact(status, language);
					botMessages.array()[i].edit(statusEmbed)
					.then()
					.catch(err => console.log('Failed to edit Embed for updateStatus in ' + guild));
					exist = true;
				}
			}
		}
		
		// If status Embed does not exist, create it
		if (!exist) {
			const statusEmbed = createEmbedCompact(status, language);
			channel.send(statusEmbed).then().catch(err => console.log('Failed to create Embed for updateStatus in ' + guild));
		}
		return null;
	})
	.catch(e => console.log('Failed to FETCH message for updateStatus in ' + guild));

	return botMessages;
	
}

module.exports = updateStatus;