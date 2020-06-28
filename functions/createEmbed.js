const bgDescriptors = require('../constants/battleground-descriptors');
const colors = require('../constants/colors');
const { UTC } = require('../config.json');
const Discord = require('discord.js');

const createEmbed = (bgType, status) => {
	const currentTime = new Date(Date.now() + UTC * 3600000);
	const timeString = '**' + currentTime.getHours() + 'h' + (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes() + '** (UTC+' + UTC + ')';
	const bg = bgDescriptors[bgType];
	
	const Embed = new Discord.MessageEmbed()
		.setColor(colors[status])
		.setTitle(bg.title)
		.setURL('https://discord.gg/UTuDSMk')
		.setDescription(bg.description[status])
		.setThumbnail(bg.image)
		.addFields(
			{ name: 'Status', value: ':' + status + '_circle:', inline: true },
			{ name: 'Start Time', value: timeString, inline: true },
			{ name: 'Players', value: bg.players[status], inline: true },
		)
		.setTimestamp(new Date())
		.setFooter(bg.footer, '');

	return Embed;
};

module.exports = createEmbed;