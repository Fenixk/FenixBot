const { CORSAIR_TYPE, SHORE_TYPE, GRIDIRON_TYPE, SKYRING_TYPE } = require('../constants/battleground-types.js');
const createEmbedCompact = require('../functions/createEmbedCompact.js');
const Discord = require('discord.js');
const Guilds = require('../schemas/Guilds.schema.js');

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
        message.reply('Languages on your server are currently **' +  res.language + '**. If you want to change it use `!lang en/fr` command.');
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
      Guilds.findOneAndUpdate({ guildId: message.guild.id }, data).then().catch(err => console.log(err.message));
      message.reply('Language for PvP Bot messages will be now in english.');
    }
    else if (args[0] === 'fr' || args[0] === 'french' || args[0] === 'français' || args[0] === 'francais') {
      lang = 'fr';
      const data = {
        guildId: message.guild.id,
        guildName: message.guild.name,
        language: lang
      }
      Guilds.findOneAndUpdate({ guildId: message.guild.id }, data).then().catch(err => console.log(err.message));
      message.reply('Le language des messages du bot seront désormais en français.');
    }
    else {
      message.reply('Invalid argument. You have to choose between en/fr. Use `!lang en/fr`.');
      return ;
    }
  }
};
