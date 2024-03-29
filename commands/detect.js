const { CORSAIR_TYPE, SHORE_TYPE, GRIDIRON_TYPE, SKYRING_TYPE, FRAYWIND_TYPE } = require('../constants/battleground-types.js');

module.exports = {
	name: 'detect',
	description: 'Trigger the BGs automatic detection and send result to the author.',
	aliases: ['detect', 'search', 'info', 'information', 'detection'],
	execute(client, message) {
		let value = {
			[CORSAIR_TYPE]: false,
			[SHORE_TYPE]: false,
			[GRIDIRON_TYPE]: false,
			[SKYRING_TYPE]: false,
			[FRAYWIND_TYPE]: false
		};

		let userNames = {
			[CORSAIR_TYPE]: '',
			[SHORE_TYPE]: '',
			[GRIDIRON_TYPE]: '',
			[SKYRING_TYPE]: '',
			[FRAYWIND_TYPE]: ''		
		};

		let userTags = {
			[CORSAIR_TYPE]: '',
			[SHORE_TYPE]: '',
			[GRIDIRON_TYPE]: '',
			[SKYRING_TYPE]: '',
			[FRAYWIND_TYPE]: ''		
		};

		let guildNames = {
			[CORSAIR_TYPE]: '',
			[SHORE_TYPE]: '',
			[GRIDIRON_TYPE]: '',
			[SKYRING_TYPE]: '',
			[FRAYWIND_TYPE]: ''		
		};	

		// Search inside all presences of all the guilds with the bot.
		client.guilds.cache.forEach((guild) => {
			if (!guild || !guild.presences) return;
			guild.presences.cache.array().forEach(presence => {
				if (presence.activities.length > 0 && presence.activities[0].name === "TERA" && presence.activities[0].assets && presence.activities[0].assets.largeText){
					let activityMessage = presence.activities[0].assets.largeText;

					if (activityMessage.includes("Твердыня корсаров")) {
						value[CORSAIR_TYPE] = true;
						userNames[CORSAIR_TYPE] = presence.user.username;
						userTags[CORSAIR_TYPE] = presence.user.tag;
						guildNames[CORSAIR_TYPE] = presence.guild.name;
					}
					else if (activityMessage.includes("Corsairs' Stronghold")) {
						value[CORSAIR_TYPE] = true;
						userNames[CORSAIR_TYPE] = presence.user.username;
						userTags[CORSAIR_TYPE] = presence.user.tag;
						guildNames[CORSAIR_TYPE] = presence.guild.name;
					}
					else if (activityMessage.includes("Fort des Corsaires")) {
						value[CORSAIR_TYPE] = true;
						userNames[CORSAIR_TYPE] = presence.user.username;
						userTags[CORSAIR_TYPE] = presence.user.tag;
						guildNames[CORSAIR_TYPE] = presence.guild.name;
					}    
					else if (activityMessage.includes("Korsarenfestung")) {
						value[CORSAIR_TYPE] = true;
						userNames[CORSAIR_TYPE] = presence.user.username;
						userTags[CORSAIR_TYPE] = presence.user.tag;
						guildNames[CORSAIR_TYPE] = presence.guild.name;
					}
					else if (activityMessage.includes("Shore Hold")) {
						value[SHORE_TYPE] = true;
						userNames[SHORE_TYPE] = presence.user.username;
						userTags[SHORE_TYPE] = presence.user.tag;
						guildNames[SHORE_TYPE] = presence.guild.name;
					}
					else if (activityMessage.includes("Битва на побережье")) {
						value[SHORE_TYPE] = true;
						userNames[SHORE_TYPE] = presence.user.username;
						userTags[SHORE_TYPE] = presence.user.tag;
						guildNames[SHORE_TYPE] = presence.guild.name;
					}
					else if (activityMessage.includes("Territoire côtier")) {
						value[SHORE_TYPE] = true;
						userNames[SHORE_TYPE] = presence.user.username;
						userTags[SHORE_TYPE] = presence.user.tag;
						guildNames[SHORE_TYPE] = presence.guild.name;
					}
					else if (activityMessage.includes("Küstenterritorium")) {
						value[SHORE_TYPE] = true;
						userNames[SHORE_TYPE] = presence.user.username;
						userTags[SHORE_TYPE] = presence.user.tag;
						guildNames[SHORE_TYPE] = presence.guild.name;
					}
					else if (activityMessage.includes("Champions' Skyring")) {
						value[SKYRING_TYPE] = true;
						userNames[SKYRING_TYPE] = presence.user.username;
						userTags[SKYRING_TYPE] = presence.user.tag;
						guildNames[SKYRING_TYPE] = presence.guild.name;
					}
					else if (activityMessage.includes("Cercle céleste des Champions")) {
						value[SKYRING_TYPE] = true;
						userNames[SKYRING_TYPE] = presence.user.username;
						userTags[SKYRING_TYPE] = presence.user.tag;
						guildNames[SKYRING_TYPE] = presence.guild.name;
					}
					else if (activityMessage.includes("Himmelsring der Helden")) {
						value[SKYRING_TYPE] = true;
						userNames[SKYRING_TYPE] = presence.user.username;
						userTags[SKYRING_TYPE] = presence.user.tag;
						guildNames[SKYRING_TYPE] = presence.guild.name;
					}
					else if (activityMessage.includes("Небесная Арена")) {
						value[SKYRING_TYPE] = true;
						userNames[SKYRING_TYPE] = presence.user.username;
						userTags[SKYRING_TYPE] = presence.user.tag;
						guildNames[SKYRING_TYPE] = presence.guild.name;
					}
					else if (activityMessage.includes("Подземная арена")) {
						value[GRIDIRON_TYPE] = true;
						userNames[GRIDIRON_TYPE] = presence.user.username;
						userTags[GRIDIRON_TYPE] = presence.user.tag;
						guildNames[GRIDIRON_TYPE] = presence.guild.name;
					}
					else if (activityMessage.includes("Gridiron")) {
						value[GRIDIRON_TYPE] = true;
						userNames[GRIDIRON_TYPE] = presence.user.username;
						userTags[GRIDIRON_TYPE] = presence.user.tag;
						guildNames[GRIDIRON_TYPE] = presence.guild.name;
					}
					else if (activityMessage.includes("Unterirdisches Schlachtfeld")) {
						value[GRIDIRON_TYPE] = true;
						userNames[GRIDIRON_TYPE] = presence.user.username;
						userTags[GRIDIRON_TYPE] = presence.user.tag;
						guildNames[GRIDIRON_TYPE] = presence.guild.name;
					}
					else if (activityMessage.includes("Champ de bataille souterrain")) {
						value[GRIDIRON_TYPE] = true;
						userNames[GRIDIRON_TYPE] = presence.user.username;
						userTags[GRIDIRON_TYPE] = presence.user.tag;
						guildNames[GRIDIRON_TYPE] = presence.guild.name;
					}
					else if (activityMessage.includes("Fraywind")) {
						value[FRAYWIND_TYPE] = true;
						userNames[FRAYWIND_TYPE] = presence.user.username;
						userTags[FRAYWIND_TYPE] = presence.user.tag;
						guildNames[FRAYWIND_TYPE] = presence.guild.name;
					}
					else if (activityMessage.includes("фрейвинд")) {
						value[FRAYWIND_TYPE] = true;
						userNames[FRAYWIND_TYPE] = presence.user.username;
						userTags[FRAYWIND_TYPE] = presence.user.tag;
						guildNames[FRAYWIND_TYPE] = presence.guild.name;
					}
					else if (activityMessage.includes("Venteguerre")) {
						value[FRAYWIND_TYPE] = true;
						userNames[FRAYWIND_TYPE] = presence.user.username;
						userTags[FRAYWIND_TYPE] = presence.user.tag;
						guildNames[FRAYWIND_TYPE] = presence.guild.name;
					}
					else if (activityMessage.includes("Canon der Ehre")) {
						value[FRAYWIND_TYPE] = true;
						userNames[FRAYWIND_TYPE] = presence.user.username;
						userTags[FRAYWIND_TYPE] = presence.user.tag;
						guildNames[FRAYWIND_TYPE] = presence.guild.name;
					}
				}
			});
		});
		if (message) {
			message.author.send(
				"Here is the result of the automatic battleground detection : \n\n" +
				(!value[CORSAIR_TYPE] ? '**• Corsair Stronghold**: Not detected :red_circle:' : (
				'**• Corsair Stronghold**:' + '\n' +
				"	- Status: " + "Popping :green_circle:" + '\n' +
				"	- Username: " +  userNames[CORSAIR_TYPE] + '\n' +
				"	- User tag: " +  userTags[CORSAIR_TYPE] + '\n' +
				"	- Server: " +  guildNames[CORSAIR_TYPE])) + 
				'\n\n' +
				(!value[SHORE_TYPE] ? '**• Shore Hold**: Not detected :red_circle:' : (
					'**• Shore Hold**:' + '\n' +
				"	- Status: " + "Popping :green_circle:" + '\n' +
				"	- Username: " +  userNames[SHORE_TYPE] + '\n' +
				"	- User tag: " +  userTags[SHORE_TYPE] + '\n' +
				"	- Server: " +  guildNames[SHORE_TYPE])) + 
				'\n\n' +
				(!value[GRIDIRON_TYPE] ? '**• Gridiron**: Not detected :red_circle:' : (
					'**• Gridiron**:' + '\n' +
				"	- Status: " + "Popping :green_circle:" + '\n' +
				"	- Username: " +  userNames[GRIDIRON_TYPE] + '\n' +
				"	- User tag: " +  userTags[GRIDIRON_TYPE] + '\n' +
				"	- Server: " +  guildNames[GRIDIRON_TYPE])) + 
				'\n\n' +
				(!value[SKYRING_TYPE] ? '**• Skyring**: Not detected :red_circle:' : (
					'**• Skyring**:' + '\n' +
				"	- Status: " + "Popping :green_circle:" + '\n' +
				"	- Username: " +  userNames[SKYRING_TYPE] + '\n' +
				"	- User tag: " +  userTags[SKYRING_TYPE] + '\n' +
				"	- Server: " +  guildNames[SKYRING_TYPE])) +
				'\n\n' +
				"Good bye ! :crossed_swords:"
			)
			.then()
			.catch(e => console.log('Failed to send battleground detection information to ' + message.member.user.username));
		}

		return [value, userNames];
	}
};
