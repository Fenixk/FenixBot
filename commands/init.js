const createEmbedCompact = require('../functions/createEmbedCompact.js');
const Guilds = require('../schemas/Guilds.schema.js');
const Status = require('../schemas/Status.schema.js');

module.exports = {
	name: 'init',
	description: 'Initialize bot the discord server admins.',
	guildOnly: false,
	roleOnly: false,
	adminOnly: true,
	aliases: ['init', 'install', 'initialize'],
	execute(client, message, bgType, args) {
		if (!args[0]) return message.reply('Missing Argument. You have to add the channel name you want to link the announce to, for example: `!init MyChannel` or `!init #MyChannel`.');
		
		let channel;
		if (args[0].substring(0, 2) === '<#') channel = message.guild.channels.cache.find((x => x.id === args[0].substring(2,args[0].length-1)));
		else channel = message.guild.channels.cache.find((x => x.name === args[0]));
		
		if (!channel) return message.reply('Invalid Argument. Please use a valid channel name, for example : `!init MyChannel` or `!init #MyChannel`.');
		
		const initMessage =
			"Thank you for using me, Fenix Bot ! I have sent the overall battleground status in **" + channel.name + "**. To use another channel, use the command `!init new-channel-name` again.\n\n" +
			"Here are what I can do:\n\n• Update overall battleground status.\n• Make a notification when battlegrounds start popping !\n\n" +
			"***Warning: Battleground pop notifications are enabled (notifications are using @here).***\n" + 
			"To deactivate them, use the command `!notif off`. The overall battleground status will remain updated but you will no longer receive notifications when battlegrounds start popping.";
		
		const data = {
			guildId: message.guild.id,
			guildName: message.guild.name,
			channelId: channel.id,
			channelName: channel.name,
			notification: true,
			status: true,
			language: 'en'
		}

		Guilds.findOneAndUpdate({ guildId: message.guild.id }, data, { upsert : true }).then().catch(err => console.log(err.message));

		Status.findOne({ id: "1" }).then(status => {
			const statusEmbed = createEmbedCompact(status);
			channel.send(statusEmbed).then(res => message.author.send(initMessage)).catch(err => message.reply("I can't send message to the channel. Make sure I have the following permissions on the targeted channel : \n\n• Read Messages\n• Send Messages\n• Embed Links\n• Read Message History\n• Mention everyone, here and all roles\n\nThen, retry the command."));
		});
	}
};
