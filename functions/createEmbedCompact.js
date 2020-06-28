const { CORSAIR_TYPE, SHORE_TYPE, GRIDIRON_TYPE, SKYRING_TYPE } = require('../constants/battleground-types.js');
const Discord = require('discord.js');

const createEmbedCompact = (status) => {
	const Embed = new Discord.MessageEmbed()
		.setColor('#e6e6e6')
		.setTitle('Battleground Activity')
		.setURL('https://discord.gg/UTuDSMk')
		.setDescription('What battlegrounds are currently popping ? Join the fight ⚔️ !')
		.setThumbnail('https://i.ibb.co/qWcw4yn/Tera-Online.png')
		.addFields(
			{ name: 'Battleground', value: 'Corsair Stronghold', inline: true },
			{ name: 'Status', value: ':' + status[CORSAIR_TYPE] + '_circle:', inline: true },
			{ name: 'Last seen', value: status['last' + CORSAIR_TYPE], inline: true },
			{ name: 'Battleground', value: 'Shore Hold', inline: true },
			{ name: 'Status', value: ':' + status[SHORE_TYPE] + '_circle:', inline: true },
			{ name: 'Last seen', value: status['last' + SHORE_TYPE], inline: true },
			{ name: 'Battleground', value: 'Gridiron', inline: true },
			{ name: 'Status', value: ':' + status[GRIDIRON_TYPE] + '_circle:', inline: true },
			{ name: 'Last seen', value: status['last' + GRIDIRON_TYPE], inline: true },
			{ name: 'Battleground', value: "Champion's Skyring", inline: true },
			{ name: 'Status', value: ':' + status[SKYRING_TYPE] + '_circle:', inline: true },
			{ name: 'Last seen', value: status['last' + SKYRING_TYPE], inline: true },
		)
		.setTimestamp(new Date())
		.setFooter('Battlegrounds focus on team based PvP fight and can be accessed in LFG.');

	return Embed;
};

module.exports = createEmbedCompact;
