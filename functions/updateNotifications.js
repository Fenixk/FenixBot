const createEmbed = require('../functions/createEmbed.js');
const bgDescriptors = require('../constants/battleground-descriptors');

const updateNotifications = (channel, bgType, language, color, updateTime, roleId, userName = '') => {
	let botMessages;
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
		userMessage = ' Thanks ' + userName + ' !';
	}
	
	channel.messages.fetch({ limit: 100 }).then(messages => {
		botMessages = messages.filter(msg => msg.author.bot);
		if (botMessages.array().length > 0){
			// Find the good Embed with status recap.
			for (let i=0; i < botMessages.array().length; i++){
				if (botMessages.array()[i].embeds[0] && botMessages.array()[i].embeds[0].title === bgDescriptors[language][bgType].title) {
					const announceEmbed = createEmbed(bgType, color, language, updateTime);
					const announceMessage = "Hello " + roleString + ", **__" + bgType.charAt(0).toUpperCase() + bgType.slice(1) + "__** is currently popping !" + userMessage;
					botMessages.array()[i].edit(announceMessage, announceEmbed);
				}
			}
		}
	})
	.catch(e => console.error(e));

	return botMessages;
	
}

module.exports = updateNotifications;