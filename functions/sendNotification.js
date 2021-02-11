const bgDescriptors = require('../constants/battleground-descriptors');
const statusDescriptors = require('../constants/status-descriptors');
const createEmbedCompact = require('../functions/createEmbedCompact.js');
const Status = require("../schemas/Status.schema.js");
const createEmbed = require('../functions/createEmbed.js');

const sendNotification = (channel, bgType, guild, language, roleId, userName = '') => {
	let botMessages;
	let exist = false;
	let statusExist = false;
	let roleString;
	let userMessage = '';

	if (!roleId || roleId === 'here' || roleId === '@here') {
		roleString = "@here";
	}
	else {
		roleString = "<@&" + roleId + ">";
	}

	if (userName !== ''){
		userMessage = ' Thanks ' + userName + ' !';
	}
	console.log("ok");
	const announceEmbed = createEmbed(bgType, 'green', language);
	const announceMessage = "Hello " + roleString + ", **__" + bgType.charAt(0).toUpperCase() + bgType.slice(1) + "__** is currently popping !" + userMessage;
	channel.messages.fetch({ limit: 100 }).then(messages => {
		console.log("ok-1");
		botMessages = messages.filter(msg => msg.author.bot);
		if (botMessages.array().length > 0) {
			if (botMessages.array()[i].embeds[0] && botMessages.array()[i].embeds[0].title === bgDescriptors[language][bgType].title) {
				botMessages.array()[i].edit(announceEmbed)
				.then(res => console.log('Update Notification for ' + guild))
				.catch(err => console.log('Failed to edit embed for SEND NOTIFICATION in ' + guild));
				exist = true;
				console.log("ok0");
			}
			console.log("ok1");
			// Find the good Embed.
			for (let i=0; i < botMessages.array().length; i++){
				if (botMessages.array()[i].embeds[0] && (
					botMessages.array()[i].embeds[0].title === statusDescriptors.fr.title || 
					botMessages.array()[i].embeds[0].title === statusDescriptors.en.title || 
					botMessages.array()[i].embeds[0].title === statusDescriptors.ru.title || 
					botMessages.array()[i].embeds[0].title === statusDescriptors.de.title )) {
					statusExist = true;
					console.log("ok2");
				}
			}
		}
		console.log("ok3");
		if (statusExist === false) {
			console.log("ok4");
			console.log('Send Status because not exist in ' + guild);
			Status.findOne({ id: "1" }).then(status => {
				const statusEmbed = createEmbedCompact(status, language);
				channel.send(statusEmbed, language);
			});
		}
		if (exist === false) {
			console.log("ok5");
			console.log('Send ' + bgType + ' notification to ' + guild);
			setTimeout(() => channel.send(announceMessage, announceEmbed), 1000);
		}
	})
	.catch(e => console.log('Failed to fetch message for SEND NOTIFICATION in ' + guild));

	return;
}


module.exports = sendNotification;

