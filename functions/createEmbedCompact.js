const statusDescription = require('../constants/status-descriptors');
const { CORSAIR_TYPE, SHORE_TYPE, GRIDIRON_TYPE, SKYRING_TYPE } = require('../constants/battleground-types.js');
const Discord = require('discord.js');

const createEmbedCompact = (status, language) => {
	const state = statusDescription[language];
	const Embed = new Discord.MessageEmbed()
		.setColor('#e6e6e6')
		.setTitle(state.title)
		.setURL('https://discord.gg/UTuDSMk')
		.setDescription(state.description)
		.setThumbnail('https://i.ibb.co/qWcw4yn/Tera-Online.png')
		.addFields(
			{ name: state.battleground, value: state.corsair, inline: true },
			{ name: state.status, value: ':' + status[CORSAIR_TYPE] + '_circle:', inline: true },
			{ name: state.last, value: status['last' + CORSAIR_TYPE], inline: true },
			{ name: state.battleground, value: state.shore, inline: true },
			{ name: state.status, value: ':' + status[SHORE_TYPE] + '_circle:', inline: true },
			{ name: state.last, value: status['last' + SHORE_TYPE], inline: true },
			{ name: state.battleground, value: state.gridiron, inline: true },
			{ name: state.status, value: ':' + status[GRIDIRON_TYPE] + '_circle:', inline: true },
			{ name: state.last, value: status['last' + GRIDIRON_TYPE], inline: true },
			{ name: state.battleground, value: state.skyring, inline: true },
			{ name: state.status, value: ':' + status[SKYRING_TYPE] + '_circle:', inline: true },
			{ name: state.last, value: status['last' + SKYRING_TYPE], inline: true },
		)
		.setTimestamp(new Date())
		.setFooter(state.footer);

	return Embed;
};

module.exports = createEmbedCompact;
