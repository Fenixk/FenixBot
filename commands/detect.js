const { CORSAIR_TYPE, SHORE_TYPE, GRIDIRON_TYPE, SKYRING_TYPE } = require('../constants/battleground-types.js');

module.exports = {
	name: 'detect',
	description: 'Test embed for a specific battlegrounds.',
	guildOnly: true,
	roleOnly: true,
	adminOnly: false,
	aliases: ['detect', 'search'],
	execute(client, message) {
		let value = {
			[CORSAIR_TYPE]: false,
			[SHORE_TYPE]: false,
			[GRIDIRON_TYPE]: false,
			[SKYRING_TYPE]: false,
		};

		// Search inside all presences of all the guilds with the bot.
		client.guilds.cache.forEach((guild) => {
			if (!guild || !guild.presences) return;
			guild.presences.cache.array().forEach(presence => {
				if (presence.activities.length > 0 && presence.activities[0].name === "TERA" && presence.activities[0].assets && presence.activities[0].assets.largeText){ 
					if (presence.activities[0].assets.largeText.includes("Твердыня корсаров"))
						value[CORSAIR_TYPE] = true;
					else if (presence.activities[0].assets.largeText.includes("Corsairs' Stronghold"))
						value[CORSAIR_TYPE] = true;
					else if (presence.activities[0].assets.largeText.includes("Fort des Corsaires"))
						value[CORSAIR_TYPE] = true;        
					else if (presence.activities[0].assets.largeText.includes("Korsarenfestung"))
						value[CORSAIR_TYPE] = true;
					else if (presence.activities[0].assets.largeText.includes("Shore Hold"))
						value[SHORE_TYPE] = true;
					else if (presence.activities[0].assets.largeText.includes("Skyring"))
						value[SKYRING_TYPE] = true;
					else if (presence.activities[0].assets.largeText.includes("Gridiron"))
						value[GRIDIRON_TYPE] = true;
				}
			});
		});
		if (message) {
			message.author.send('Corsair: ' + JSON.stringify(value[CORSAIR_TYPE]) + '\n' +
				'Shore: ' + JSON.stringify(value[SHORE_TYPE]) + '\n' +
				'Gridiron: ' + JSON.stringify(value[GRIDIRON_TYPE]) + '\n' +
				'Skyring: ' + JSON.stringify(value[SKYRING_TYPE]) + '\n');
		}
		return value;
	}
};