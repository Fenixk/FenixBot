const updateAllStatus = require('../functions/updateAllStatus.js');
const sendAllNotifications = require('../functions/sendAllNotifications.js');
const { sleepStartTime, sleepEndTime } = require('../config.json');
const { UTC } = require('../config.json');

module.exports = {
	name: 'pop',
	description: 'Test embed for a specific battlegrounds.',
	guildOnly: true,
	roleOnly: true,
	adminOnly: false,
	aliases: ['pop'],
	execute(client, message, bgType) {
		if (!bgType) return message.reply('Missing argument. Please put the name of the bg you want to pop.'); 
		updateAllStatus(client, bgType, 'green');
		if (!isMessageDuringSleepHour()) sendAllNotifications(client, bgType);
		if (isMessageDuringSleepHour() && message) message.reply("ZzzZzZ, I'm sleeping between 1h00 and 10h00. However I'll update status. Good night.")
	}
};

const isMessageDuringSleepHour = () => {
	const currentTime = new Date(Date.now() + UTC * 3600000).getHours();
	return (currentTime >= sleepStartTime && currentTime < sleepEndTime);
}
