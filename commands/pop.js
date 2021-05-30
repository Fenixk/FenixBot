const updateAllStatus = require('../functions/updateAllStatus.js');
const sendAllNotifications = require('../functions/sendAllNotifications.js');
const updateAllNotifications = require('../functions/updateAllNotifications.js');
const { sleepStartTime, sleepEndTime, UTC } = require('../config.json');

module.exports = {
	name: 'pop',
	description: 'Create notifications for BGs and update status to green.',
	guildOnly: true,
	roleOnly: true,
	adminOnly: false,
	aliases: ['pop'],
	execute(client, message, bgType, userName) {
		if (!bgType) return message.reply('Missing argument. Please put the name of the bg you want to pop.'); 
		if (userName === "Rhittar") return;
		updateAllStatus(client, bgType, 'green');
		console.log(userName);
		updateAllNotifications(client, bgType, 'green', userName);
		if (!isMessageDuringSleepHour()) sendAllNotifications(client, bgType, userName);
		if (isMessageDuringSleepHour() && message) message.reply("ZzzZzZ, I'm sleeping between " + (sleepStartTime + UTC.eu) + "h00 and " + (sleepEndTime + UTC.eu) + "h00. However I'll update status. Good night.")
	}
};

const isMessageDuringSleepHour = () => {
	const currentTime = new Date(Date.now()).getUTCHours();
	if (currentTime + UTC.eu >= 25) return true;
	return (currentTime >= (sleepStartTime + UTC.eu) && currentTime <= (sleepEndTime + UTC.eu));
}
