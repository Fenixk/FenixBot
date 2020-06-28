const createEmbedCompact = require('../functions/createEmbedCompact.js');

const updateStatus = (channel, status, guild) => {
	let botMessages;
	let exist = false;
	channel.messages.fetch({ limit: 100 }).then(messages => {
		botMessages = messages.filter(msg => msg.author.bot);
		if (botMessages.array().length > 0){
			// Find the good Embed with status recap.
			for (let i=0; i < botMessages.array().length; i++){
				if (botMessages.array()[i].embeds[0] && botMessages.array()[i].embeds[0].title === 'Battleground Activity'){
					const statusEmbed = createEmbedCompact(status);
					console.log('Update Embed for ' + guild);
					botMessages.array()[i].edit(statusEmbed).then().catch(err => console.log('Failed to edit Embed for updateStatus in ' + guild));
					exist = true;
				}
			}
		}
		
		// If status Embed does not exist, create it
		if (!exist) {
			const statusEmbed = createEmbedCompact(status)
			channel.send(statusEmbed).then().catch(err => console.log('Failed to create Embed for updateStatus in ' + guild));
		}
		return null;
	})
	.catch(e => console.log('Failed to FETCH message for updateStatus in ' + guild));

	return botMessages;
	
}

module.exports = updateStatus;