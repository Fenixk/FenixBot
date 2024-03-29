const statusDescription = require('../constants/status-descriptors');
const { CORSAIR_TYPE, SHORE_TYPE, GRIDIRON_TYPE, SKYRING_TYPE, FRAYWIND_TYPE } = require('../constants/battleground-types.js');
const Discord = require('discord.js');
const { UTC } = require('../config.json');

const createEmbedCompact = (status, language) => {
	const state = statusDescription[language];
	const Embed = new Discord.MessageEmbed()
		.setColor('#e6e6e6')
		.setTitle(state.title)
		.setURL('https://discord.gg/menmastera')
		.setDescription(state.description)
		.setThumbnail('https://i.ibb.co/qWcw4yn/Tera-Online.png')
		.addFields(
			{ name: state.battleground, value: state.fraywind, inline: true },
			{ name: state.status, value: ':' + status[FRAYWIND_TYPE] + '_circle:', inline: true },
			{ name: state.last, value: translateDate(status['last' + FRAYWIND_TYPE], language), inline: true },
			{ name: state.battleground, value: state.corsair, inline: true },
			{ name: state.status, value: ':' + status[CORSAIR_TYPE] + '_circle:', inline: true },
			{ name: state.last, value: translateDate(status['last' + CORSAIR_TYPE], language), inline: true },
			{ name: state.battleground, value: state.shore, inline: true },
			{ name: state.status, value: ':' + status[SHORE_TYPE] + '_circle:', inline: true },
			{ name: state.last, value: translateDate(status['last' + SHORE_TYPE], language), inline: true },
			{ name: state.battleground, value: state.skyring, inline: true },
			{ name: state.status, value: ':' + status[SKYRING_TYPE] + '_circle:', inline: true },
			{ name: state.last, value: translateDate(status['last' + SKYRING_TYPE], language), inline: true }
		)
		.setTimestamp(new Date())
		.setFooter(state.footer);
		1611435406205
	return Embed;
};

function translateDate(timestamp, language) {
	if (parseInt(timestamp,10) === 0) {
		return 'Not registred yet';
	}
	const UTCtime = UTC[language];
	const currentTime = new Date(parseInt(timestamp,10) + UTCtime * 3600000);
	const time = '**' + currentTime.getHours() + 'h' + (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes() + '**';
	const date = ' - ' + currentTime.getDate() + '/' + (currentTime.getMonth()+1) + '/' + currentTime.getFullYear();
	const timeString = time + ' (UTC+' + UTC[language] + ')' + date;

	return timeString;
}

module.exports = createEmbedCompact;
