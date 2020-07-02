const updateStatus = require('../functions/updateStatus.js');
const Guilds = require('../schemas/Guilds.schema.js');
const Status = require('../schemas/Status.schema.js');
const { frenchAliases, englishAliases, germanAliases, russianAliases } =  require('../config.json');

module.exports = {
	name: 'bg-role',
	description: 'Change the role for the bot notification.',
	guildOnly: false,
	roleOnly: false,
	adminOnly: true,
	aliases: ['bg-role'],
	execute(client, message, bgType, args) {
		let bgRole = 'here';

		if (!args[0]) {
			Guilds.findOne({ guildId: message.guild.id }).then(res => {
				if (!res) return message.reply('You have to use the command `!init #your-bg-channel` before using !lang command.');
				if (!res.role) message.reply('Battleground role for the bot on your server is currently **here**. If you want to change it use `!role roleName` command.');
				else message.reply('Battleground role for the bot on your server is currently **<@&' + res.role + '>**. If you want to change it use `!role roleName` command.');
			});
			return ;
		}

		bgRole = args[0];

		if (args[0].startsWith('@')){
			bgRole = args[0].substring(1);
		}

		console.log(bgRole);

		let role = message.guild.roles.cache.find(x => x.name == bgRole);
		if(!role) {
			return message.reply('The role **' + bgRole + '** does not exist. Please use an existing one.');
		}
		else {
			const data = {
				guildId: message.guild.id,
				guildName: message.guild.name,
				role: role.id
			}
	
			Guilds.findOneAndUpdate({ guildId: message.guild.id }, data).then().catch(err => console.log(err.message));
			return message.reply('Messages from bot will now use the role **' + bgRole + '**');
		}

		return ;
	}
};
