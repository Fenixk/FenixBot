const updateAllStatus = require('../functions/updateAllStatus.js');
const removeAllNotifications = require('../functions/removeAllNotifications.js');

module.exports = {
	name: 'cancel',
	description: 'Cancel notifications for BGs and update status to red.',
	guildOnly: true,
	roleOnly: true,
	adminOnly: false,
	aliases: ['cancel'],
	execute(client, message, bgType) {
		if (!bgType) return message.reply('Missing argument. Please put the name of the bg you want to cancel.');

		updateAllStatus(client, bgType, 'red');
		removeAllNotifications(client, bgType);
	}
};
