const createEmbed = require('../functions/createEmbed.js');
const bgDescriptors = require('../constants/battleground-descriptors');
const { thanks } = require('../config.json');

const updateNotifications = (channel, bgType, language, color, updateTime, roleId, userName = '', guildName) => {
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
		userMessage =  " " + thanks[language] + " " + userName + ' !';
	}
	
	channel.messages.fetch({ limit: 100 }).then(messages => {
		botMessages = messages.filter(msg => msg.author.bot);
		if (botMessages.array().length > 0){
			// Find the good Embed with status recap.
			for (let i=0; i < botMessages.array().length; i++){
				if (botMessages.array()[i].embeds[0] && botMessages.array()[i].embeds[0].title === bgDescriptors[language][bgType].title) {
					const announceEmbed = createEmbed(bgType, color, language, updateTime, userName);
					const announceMessage = "Hello " + roleString + ", **__" + bgType.charAt(0).toUpperCase() + bgType.slice(1) + "__** is currently popping !" + userMessage;
					if (color === "green") {
						botMessages.array()[i].edit(announceMessage, announceEmbed)
						.then()
						.catch(err => console.log('Failed to edit Embed for updateNotifications in ' + guildName));
					} else {
						botMessages.array()[i].edit(announceEmbed)
						.then()
						.catch(err => console.log('Failed to edit Embed for updateNotifications in ' + guildName));
					}
				}
			}
		}
	})
	.catch(e => console.error(e));

	return botMessages;
	
}

module.exports = updateNotifications;