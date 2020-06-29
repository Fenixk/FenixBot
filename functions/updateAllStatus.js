const updateStatus = require("../functions/updateStatus.js");
const Status = require("../schemas/Status.schema.js");
const Guilds = require('../schemas/Guilds.schema.js');
const { UTC } = require("../config.json");

const updateAllStatus = (client, bgType, statusType) => {
	// First Update Database.
	Status.findOne({ id: "1" }).then(status => {
		status[bgType] = statusType;
		if (statusType === "green") status[`last${bgType}`] = getNowDate();
		console.log('Updating status ' + statusType);
		Status.findOneAndUpdate({ _id: status._id }, status).then(new_status => {
			client.guilds.cache.forEach(guild => {
				Guilds.findOne({ guildId: guild.id }).then(res => {
					if (!res) return;
					let channels = guild.channels.cache.filter(channel => { return channel.id === res.channelId;}).array();
					if (channels && channels.length > 0) {
						channels = channels.sort((a, b) => { return a.calculatedPosition - b.calculatedPosition; });
						updateStatus(channels[0], status, res.guildName, res.language);
					}
				});
			});
		});
	});
};

function getNowDate() {
	const currentTime = new Date(Date.now() + UTC * 3600000);
	const monthNames = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December" ];
	const time = 'At **' + currentTime.getHours() + 'h' + (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes() + '** (UTC+' + UTC + ')';
	const date = 'on ' + currentTime.getDate() + ' ' + monthNames[currentTime.getMonth()] + ' ' + currentTime.getFullYear();
	const timeString = time + ' ' + date;
	return timeString;
}

module.exports = updateAllStatus;
