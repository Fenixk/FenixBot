const Guilds = require('../schemas/Guilds.schema.js');

module.exports = {
	name: 'bg-role',
	description: 'Change the role for the bot notification.',
	guildOnly: false,
	roleOnly: false,
	adminOnly: true,
	aliases: ['bg-role', 'bg-roles', 'bgRole', 'bgRoles'],
	execute(client, message, bgType, args) {
		let bgRole;
		let role;
		let isOff;

		if (!args[0]) {
			Guilds.findOne({ guildId: message.guild.id }).then(res => {
				if (!res) return message.reply('You have to use the command `!init #your-bg-channel` before using !lang command.');
				if (!res.role) message.reply('Battleground role for the bot on your server is currently **here**. If you want to change it use `!bg-role roleName` command.');
				else message.reply('Battleground role for the bot on your server is currently **<@&' + res.role + '>**. If you want to change it use `!bg-role roleName` command.');
			});
			return ;
		}

		bgRole = args[0];

		if (args[0].startsWith('<@&')){
			bgRole = args[0].substring(3, args[0].length-1);
		}
		
		role = message.guild.roles.cache.find(x => x.name == bgRole || x.id == bgRole);
		

		isOff = (bgRole === "off");
		if(!role && !isOff) {
			return message.reply('The role **' + bgRole + '** does not exist. Please use an existing one.');
		}
		else {
			const data = {
				guildId: message.guild.id,
				guildName: message.guild.name,
				role: isOff ? "off" : role.id
			}
	
			Guilds.findOneAndUpdate({ guildId: message.guild.id }, data).then().catch(err => console.log(err.message));
			if (isOff) {
				return message.reply('Messages from the bot will not use role anymore in notifications.');
			}
			return message.reply('Messages from bot will now use the role **' + role.name + '**');

		}

		return ;
	}
};
