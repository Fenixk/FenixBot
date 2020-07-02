const updateStatus = require('../functions/updateStatus.js');
const Guilds = require('../schemas/Guilds.schema.js');
const Status = require('../schemas/Status.schema.js');
const { frenchAliases, englishAliases, germanAliases, russianAliases } =  require('../config.json');

module.exports = {
	name: 'lang',
	description: 'Change the language of the bot messages and the time zone.',
	guildOnly: false,
	roleOnly: false,
	adminOnly: true,
	aliases: ['lang', 'language'],
	execute(client, message, bgType, args) {
		const aliases = [frenchAliases, englishAliases, germanAliases, russianAliases];
		let lang = 'en';

		if (!args[0]) {
			Guilds.findOne({ guildId: message.guild.id }).then(res => {
				if (!res) return message.reply('You have to use the command `!init #your-bg-channel` before using !lang command.');
				message.reply('message language for the bot on your server is currently **' +	res.language + '**. If you want to change it use `!lang en/fr/de/ru` command.');
			});
			return ;
		}

		for (let i=0; i < aliases.length; i++){

			if (aliases[i].includes(args[0].toLowerCase())){
				lang = aliases[i][0];
				const data = {
					guildId: message.guild.id,
					guildName: message.guild.name,
					language: lang
				}
				Guilds.findOneAndUpdate({ guildId: message.guild.id }, data).then(res => {
					if (!res) return message.reply('You have to use the command `!init #your-bg-channel` before using !lang command.');
					let channels = message.guild.channels.cache.filter(channel => { return channel.id === res.channelId;}).array();
					if (channels && channels.length > 0) {
						channels = channels.sort((a, b) => { return a.calculatedPosition - b.calculatedPosition; });
						Status.findOne({ id: "1" }).then(status => {
							updateStatus(channels[0], status, res.guildName, lang);
						});
					}
				}).catch(err => console.log(err.message));
				message.reply('messages from bot will be now in ' + aliases[i][1]);
				return ;
			}
		}

		message.reply('Invalid argument. You have to choose between en/fr/de/ru. Use `!lang en/fr/de/ru`.');
		return ;
	}
};
