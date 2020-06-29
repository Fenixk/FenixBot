const updateStatus = require('../functions/updateStatus.js');
const Guilds = require('../schemas/Guilds.schema.js');
const Status = require('../schemas/Status.schema.js');

module.exports = {
	name: 'lang',
	description: 'Test embed for a specific battlegrounds.',
	guildOnly: false,
	roleOnly: false,
	adminOnly: true,
	aliases: ['lang', 'language'],
	execute(client, message, bgType, args) {
		let lang = 'en';

		if (!args[0]) {
			Guilds.findOne({ guildId: message.guild.id }).then(res => {
				if (!res) return message.reply('You have to use the command `!init #your-bg-channel` before using !lang command.');
				message.reply('message language for the bot on your server is currently **' +	res.language + '**. If you want to change it use `!lang en/fr` command.');
			});
			return ;
		}
		else if (args[0] === 'en' || args[0] === 'english') {
			lang = 'en';
			const data = {
				guildId: message.guild.id,
				guildName: message.guild.name,
				language: lang
			}
			Guilds.findOneAndUpdate({ guildId: message.guild.id }, data).then(res => {
				if (!res) return;
				let channels = guild.channels.cache.filter(channel => { return channel.id === res.channelId;}).array();
				if (channels && channels.length > 0) {
					channels = channels.sort((a, b) => { return a.calculatedPosition - b.calculatedPosition; });
					Status.findOne({ id: "1" }).then(status => {
						updateStatus(channels[0], status, res.guildName, res.language);
					});
				}
			}).catch(err => console.log(err.message));
			message.reply('messages from bot will be now in english.');
		}
		else if (args[0] === 'fr' || args[0] === 'french' || args[0] === 'français' || args[0] === 'francais') {
			lang = 'fr';
			const data = {
				guildId: message.guild.id,
				guildName: message.guild.name,
				language: lang
			}
			Guilds.findOneAndUpdate({ guildId: message.guild.id }, data).then(res => {
				if (!res) return;
				let channels = message.guild.channels.cache.filter(channel => { return channel.id === res.channelId;}).array();
				if (channels && channels.length > 0) {
					channels = channels.sort((a, b) => { return a.calculatedPosition - b.calculatedPosition; });
					updateStatus(channels[0], status, res.guildName, res.language);
				}
			}).catch(err => console.log(err.message));
			message.reply('les messages du bot seront désormais en français.');
		}
		else {
			message.reply('Invalid argument. You have to choose between en/fr. Use `!lang en/fr`.');
			return ;
		}
	}
};
