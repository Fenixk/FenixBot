const bgDescriptors = require('../constants/battleground-descriptors');
const statusDescriptors = require('../constants/status-descriptors');
const createEmbedCompact = require('../functions/createEmbedCompact.js');
const Status = require("../schemas/Status.schema.js");
const createEmbed = require('../functions/createEmbed.js');
const { thanks } = require('../config.json');

const sendNotification = (channel, bgType, guild, language, roleId, userName = '') => {
	let botMessages;
	let exist = false;
	let statusExist = false;
	let roleString;
	let userMessage = '';

	if (!roleId || roleId === 'here' || roleId === '@here') {
		roleString = "@here";
	}
	else if (roleId === 'off') {
		roleString = "";
	}
	else {
		roleString = "<@&" + roleId + ">";
	}

	if (userName !== ''){
		userMessage =  " " + thanks[language] + " " + userName + ' !';
	}

	const announceEmbed = createEmbed(bgType, 'green', language, null, userName);
	const announceMessage = "Hello " + roleString + ", **__" + bgType.charAt(0).toUpperCase() + bgType.slice(1) + "__** is currently popping !" + userMessage;
	channel.messages.fetch({ limit: 100 }).then(messages => {
		botMessages = messages.filter(msg => msg.author.bot);
		if (botMessages.array().length > 0) {
			// Find the good Embed.
			for (let i=0; i < botMessages.array().length; i++){
				if (botMessages.array()[i].embeds[0] && botMessages.array()[i].embeds[0].title === bgDescriptors[language][bgType].title) {
					exist = true;
				}
				if (botMessages.array()[i].embeds[0] && (
					botMessages.array()[i].embeds[0].title === statusDescriptors.fr.title || 
					botMessages.array()[i].embeds[0].title === statusDescriptors.en.title || 
					botMessages.array()[i].embeds[0].title === statusDescriptors.ru.title || 
					botMessages.array()[i].embeds[0].title === statusDescriptors.de.title )) {
					statusExist = true;
				}
			}
		}
		if (statusExist === false) {
			console.log('Send Status because not exist in ' + guild);
			Status.findOne({ id: "1" }).then(status => {
				const statusEmbed = createEmbedCompact(status, language);
				channel.send(statusEmbed, language);
			});
		}
		if (exist === false) {
			console.log('Send ' + bgType + ' notification to ' + guild);
			setTimeout(() => channel.send(announceMessage, announceEmbed), 1000);
		}
	})
	.catch(e => console.log('Failed to fetch message for SEND NOTIFICATION in ' + guild));

	return;
}


module.exports = sendNotification;

