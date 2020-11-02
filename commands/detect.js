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

		let userName = '';
		let userTag = '';
		let activity = '';
		let guildName = '';
		let assets = '';
		let isEUServer = false;

		// Search inside all presences of all the guilds with the bot.
		client.guilds.cache.forEach((guild) => {
			if (!guild || !guild.presences) return;
			console.log(guild.presences.cache.array().length);
			guild.presences.cache.array().forEach(presence => {
				console.log(presence.activities[0].name === "TERA");
				console.log(presence.activities.length > 0);
				console.log(presence.activities[0].assets.largeText)
				if (presence.activities.length > 0 && presence.activities[0].name === "TERA" && presence.activities[0].assets && presence.activities[0].assets.largeText){
					console.log('coucou3');
					if (!presence.activities[0].assets.smallText) {
						return;
					}

					isEUServer = presence.activities[0].assets.smallText.includes("EU");
					if (!isEUServer) {
						console.log('Not in Europe Server.');
						return;
					}
					let activityMessage = presence.activities[0].assets.largeText;
					console.log(activityMessage);
					console.log(presence.activities[0].assets.smallText);
					if (presence.activities[0].assets.smallText.includes("Golden")) {
						value[SHORE_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
						console.log("test True");
					}

					if (activityMessage.includes("Твердыня корсаров")) {
						value[CORSAIR_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Corsairs' Stronghold")) {
						value[CORSAIR_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Fort des Corsaires")) {
						value[CORSAIR_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}    
					else if (activityMessage.includes("Korsarenfestung")) {
						value[CORSAIR_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Shore Hold")) {
						value[SHORE_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Битва на побережье (RU)")) {
						value[SHORE_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Territoire côtier")) {
						value[SHORE_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Küstenterritorium")) {
						value[SHORE_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Champions' Skyring")) {
						value[SKYRING_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Cercle céleste des Champions")) {
						value[SKYRING_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Himmelsring der Helden")) {
						value[SKYRING_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Небесная Арена (RU)")) {
						value[SKYRING_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Подземная арена (RU)")) {
						value[GRIDIRON_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Gridiron")) {
						value[GRIDIRON_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Unterirdisches Schlachtfeld")) {
						value[GRIDIRON_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
					else if (activityMessage.includes("Champ de bataille souterrain")) {
						value[GRIDIRON_TYPE] = true;
						userName = presence.user.username;
						userTag = presence.user.tag;
						guildName = presence.guild.name;
						activity = presence.activities[0];
						assets = presence.activities[0].assets;
					}
				}
			});
		});
		if (message) {
			message.author.send(
				'Corsair: ' + JSON.stringify(value[CORSAIR_TYPE]) + '\n' +
				'Shore: ' + JSON.stringify(value[SHORE_TYPE]) + '\n' +
				'Gridiron: ' + JSON.stringify(value[GRIDIRON_TYPE]) + '\n' +
				'Skyring: ' + JSON.stringify(value[SKYRING_TYPE]) + '\n'
			);

			if (userName) {
				message.author.send(
					'Username: ' + userName + '\n' +
					'Server: ' + isEUServer ? 'Europe' : 'Not EUROPE' + '\n' +
					'Discord tag: ' + userTag + '\n' +
					'Discord server: ' + guildName + '\n'
				);
			}
	
			if (assets) {
				message.author.send(JSON.stringify(assets));
				message.author.send(JSON.stringify(activity));
			}
		}

		return [value, userName];
	}
};
