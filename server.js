const fs = require('fs');
const express = require('express');
const Discord = require('discord.js');
const app = express();

// Database Connexion to handle guild preferences.
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@fenixbotcluster-ho4id.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`; // url de MongoDB Cloud
const mongoose = require('mongoose'); // import des fonctions du module 'mongoose' (module de MongoDB Cloud pour NodeJS)
mongoose.set('useFindAndModify', false);
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
		console.log("Successfully connected to MongoDB.");
}).catch(err => {
		console.log('Could not connect to MongoDB, error: ' + err);
		process.exit();
});

// Create Bot Server so it can listen to commands.
app.get("/", (request, response) => {
	response.sendStatus(200);
});
const listener = app.listen(process.env.PORT, () => {
	console.log("Your app is listening on port " + listener.address().port);
});

// Bot Options
const discordId = process.env.DISCORD;
const { prefix, allowedRoles } = require('./config.json');
const { CORSAIR_TYPE, SHORE_TYPE, GRIDIRON_TYPE, SKYRING_TYPE, FRAYWIND_TYPE } = require('./constants/battleground-types.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// Bot Functions
const getBattlegroundType = require('./functions/getBattlegroundType.js');
const bgDescriptors = require('./constants/battleground-descriptors');
const removeAllNotifications = require('./functions/removeAllNotifications.js');
const updateAllNotifications = require('./functions/updateAllNotifications.js');
const updateAllStatus = require('./functions/updateAllStatus.js');

// Bot Global Timer to automatically remove/update notification after 1h.
let orangeTimer = {
			[CORSAIR_TYPE]: true,
			[SHORE_TYPE]: true,
			[GRIDIRON_TYPE]: true,
			[SKYRING_TYPE]: true,
			[FRAYWIND_TYPE]: true,
}
let redTimer = {
			[CORSAIR_TYPE]: true,
			[SHORE_TYPE]: true,
			[GRIDIRON_TYPE]: true,
			[SKYRING_TYPE]: true,
			[FRAYWIND_TYPE]: true,
}
let retry = {
	[CORSAIR_TYPE]: true,
	[SHORE_TYPE]: true,
	[GRIDIRON_TYPE]: true,
	[SKYRING_TYPE]: true,
	[FRAYWIND_TYPE]: true,
};

// Automatic Detection for Discord Game Activity every 2 minutes.
setInterval(() => { 
	const [values, userNames] = client.commands.get('detect').execute(client); 
	const bgTypes = [CORSAIR_TYPE, SHORE_TYPE, GRIDIRON_TYPE, SKYRING_TYPE, FRAYWIND_TYPE];

	bgTypes.forEach(bgType => {
			if (values[bgType] && retry[bgType]) { 
				console.log('Auto Detection: Entering into ' + bgType);
				retry[bgType] = false;
				// client.commands.get('pop').execute(client, null, bgType, userNames[bgType]);
				createTimer(bgType, 30*60);
			}
			else if (!values[bgType] && !retry[bgType]) {
				console.log('Auto Detection: Leaving ' + bgType);
				// client.commands.get('pop').execute(client, null, bgType, userNames[bgType]);
				createTimer(bgType, 30*60);
				retry[bgType] = true;
			}
			else if (values[bgType]) {
				console.log('Auto Detection: ' + bgType + ' is currently popping, sent by ' + userNames[bgType]);
			}		
	})
}, 2*60*1000);

// When Bot is started.
client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity('!fenix for help')
});

// When Bot join a new servers.
client.on("guildCreate", guild => {
	// This event triggers when the bot joins a guild.
	console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

// When Bot recieved a message sent by a client.
client.on('message', message => {
		
		// If the message does not come from discord server or no prefix or not human, do nothing.
		if (!message.guild || !message.content.startsWith(prefix) || message.author.bot) return;
	
		const args = message.content.slice(prefix.length).split(' ');
		const commandName = args.shift().toLowerCase();
		const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
		const bgType = getBattlegroundType(message, args[0]);
	
		if (!command) return;
		if (command.guildOnly && !(message.guild.id === discordId)) return message.reply('You have to be on the discord Tera PvP EU to use this command.');
		if (command.roleOnly && !(message.member.roles.cache.some(x => allowedRoles.includes(x.name)))) return message.reply('You have to be an Organizer to use this command.');
		if (command.adminOnly && !(message.member.hasPermission('ADMINISTRATOR'))) return message.reply('You have to be Administrator to use the command.');
		if (command.args && !args.length) {
			let reply = `You didn't provide any arguments, ${message.author}!`;
			return message.channel.send(reply);
		}

		try {
			if (command.name !== 'pop') command.execute(client, message, bgType, args);
			if (command.name === 'pop') command.execute(client, message, bgType, message.member.user.username);
			if (command.name === 'pop' && bgType) createTimer(bgType, bgDescriptors[bgType].timer*60);
			if (command.name === 'cancel') clearTimer(bgType, true, true);
			
		} catch (error) {
			console.error(error);
			message.reply('there was an error trying to execute that command!');
		}
});

// Function createTimer to handle automatic remove/update status after X hour.
function createTimer(bgType, time) {
	clearTimer(bgType, true, true);
	orangeTimer[bgType] = setTimeout(() => { 
		clearTimer(bgType, true, false);
		updateAllStatus(client, bgType, 'orange');
		updateAllNotifications(client, bgType, 'orange');
		redTimer[bgType] = setTimeout(() => {
			clearTimer(bgType, false, true);
			updateAllStatus(client, bgType, 'red');
			removeAllNotifications(client, bgType);
		}, time*1000);
	}, time*1000);
}

function clearTimer(bgType, orange, red) {
	if (orange) clearTimeout(orangeTimer[bgType]); 
	if (red) clearTimeout(redTimer[bgType]);
}

client.login(process.env.TOKEN).then().catch(err => console.log(err));
