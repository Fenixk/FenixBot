const updateAllStatus = require('../functions/updateAllStatus.js');
const sendAllNotifications = require('../functions/sendAllNotifications.js');
const { sleepStartTime, sleepEndTime } = require('../config.json');

module.exports = {
	name: 'pop',
	description: 'Create notifications for BGs and update status to green.',
	guildOnly: true,
	roleOnly: true,
	adminOnly: false,
	aliases: ['pop'],
	execute(client, message, bgType, userName) {
		if (!bgType) return message.reply('Missing argument. Please put the name of the bg you want to pop.'); 
		updateAllStatus(client, bgType, 'green');
		updateAllNotifications(client, bgType, 'green');
		if (!isMessageDuringSleepHour()) sendAllNotifications(client, bgType, userName);
		if (isMessageDuringSleepHour() && message) message.reply("ZzzZzZ, I'm sleeping between 1h00 and 10h00. However I'll update status. Good night.")
	}
};

const isMessageDuringSleepHour = () => {
	const currentTime = new Date(Date.now()).getHours();
	return (currentTime >= sleepStartTime && currentTime < sleepEndTime);
}
