const { CORSAIR_TYPE, SHORE_TYPE, GRIDIRON_TYPE, SKYRING_TYPE } = require('../constants/battleground-types.js');

module.exports = {
	name: 'detect',
	description: 'Trigger the BGs automatic detection and send result to the author.',
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
				console.log(presence.user.username);
				console.log(presence.activities[0]);
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
					else if (presence.activities[0].assets.largeText.includes("Битва на побережье"))
						value[SHORE_TYPE] = true;
					else if (presence.activities[0].assets.largeText.includes("Territoire côtier"))
						value[SHORE_TYPE] = true;
					else if (presence.activities[0].assets.largeText.includes("Küstenterritorium"))
						value[SHORE_TYPE] = true;
					else if (presence.activities[0].assets.largeText.includes("Champions' Skyring"))
						value[SKYRING_TYPE] = true;
					else if (presence.activities[0].assets.largeText.includes("Cercle céleste des Champions"))
						value[SKYRING_TYPE] = true;
					else if (presence.activities[0].assets.largeText.includes("Himmelsring der Helden"))
						value[SKYRING_TYPE] = true;
					else if (presence.activities[0].assets.largeText.includes("Небесная Арена"))
						value[SKYRING_TYPE] = true;
					else if (presence.activities[0].assets.largeText.includes("Подземная арена"))
						value[GRIDIRON_TYPE] = true;
					else if (presence.activities[0].assets.largeText.includes("Gridiron"))
						value[GRIDIRON_TYPE] = true;
					else if (presence.activities[0].assets.largeText.includes("Unterirdisches Schlachtfeld"))
						value[GRIDIRON_TYPE] = true;
					else if (presence.activities[0].assets.largeText.includes("Champ de bataille souterrain"))
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