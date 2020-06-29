const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GuildsSchema = new Schema({
	guildName: { type: String, required: true },
	guildId: { type: String, required: true },
	channelName: { type: String, required: true },
	channelId: { type: String, required: true },
	notification: { type: Boolean, default: true, required: true },
	status: { type: Boolean, default: true, required: true },
	language: { type: String, default: 'en', required: true },
});

module.exports = mongoose.model("Guilds", GuildsSchema, "Guilds");
