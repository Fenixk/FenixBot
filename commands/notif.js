const Guilds = require('../schemas/Guilds.schema.js');

module.exports = {
	name: 'notif',
	description: 'Enable or Disable notification for your server.',
  guildOnly: false,
  roleOnly: false,
  adminOnly: true,
  aliases: ['notif', 'notification'],
	execute(client, message, bgType, args) {
    let notif = true;

    if (!args[0]) {
      Guilds.findOne({ guildId: message.guild.id }).then(res => {
        if (!res) return message.reply('You have to use the command `!init #your-bg-channel` before using !notif command.');
        notif = res.notification ? 'activated' : 'deactivated';
        message.reply('Notifications on your server are currently **' +  notif + '**. If you want to change it use `!notif ' + !res.notification + '` command. However the battleground status embed will remain updated.');
      });
      return ;
    }
    else if (args[0] === 'true' || args[0] === 'on') {
      notif = true;
      const data = {
        guildId: message.guild.id,
        guildName: message.guild.name,
        notification: notif
      }
      Guilds.findOneAndUpdate({ guildId: message.guild.id }, data).then().catch(err => console.log(err.message));
      message.reply('Notifications from PvP Bot are activated.');
    }
    else if (args[0] === 'false' || args[0] === 'off') {
      notif = false;
      const data = {
        guildId: message.guild.id,
        guildName: message.guild.name,
        notification: notif
      }
      Guilds.findOneAndUpdate({ guildId: message.guild.id }, data).then().catch(err => console.log(err.message));
      message.reply('Notifications from PvP Bot are now deactivated. However the battleground status embed will remain updated.');
    }
    else {
      message.reply('Invalid argument. Please use `!notif true` or `!notif false` to activate or deactivate notifications. However the battleground status embed will remain updated.');
      return ;
    }
  }
};
