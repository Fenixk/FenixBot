const bgDescriptors = require('../constants/battleground-descriptors');
const colors = require('../constants/colors');
const { UTC } = require('../config.json');
const Discord = require('discord.js');

const createEmbed = (bgType, status, language) => {
	const timeString = translateDate(Date.now(), language);
	const bg = bgDescriptors[bgType];
	const bgLang = bgDescriptors[language][bgType];
	
	const Embed = new Discord.MessageEmbed()
		.setColor(colors[status])
		.setTitle(bgLang.title)
		.setURL('https://discord.gg/UTuDSMk')
		.setDescription(bgLang.description[status])
		.setThumbnail(bg.image)
		.addFields(
			{ name: 'Status', value: ':' + status + '_circle:', inline: true },
			{ name: 'Start Time', value: timeString, inline: true },
			{ name: 'Players', value: bg.players[status], inline: true },
		)
		.setTimestamp(new Date())
		.setFooter(bgLang.footer, '');

	return Embed;
};

function translateDate(timestamp, language) {
	if (parseInt(timestamp,10) === 0) {
		return 'Not registred yet';
	}
	const UTCtime = UTC[language];
	const currentTime = new Date(parseInt(timestamp,10) + UTCtime * 3600000);
	const time = '**' + currentTime.getHours() + 'h' + (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes() + '**';
	const date = ' - ' + currentTime.getDate() + '/' + currentTime.getMonth() + '/' + currentTime.getFullYear();
	const timeString = time + (language === "en" ? ' (UTC+2)' : '') + ' - ' + + date;

	return timeString;
}


module.exports = createEmbed;