const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatusSchema = new Schema({
	corsair: { type: String, required: true },
	shore: { type: String, required: true },
	gridiron: { type: String, required: true },
	skyring: { type: String, required: true },
	fraywind: { type: String, required: true},
	lastcorsair: { type: String, required: true },
	lastshore: { type: String, required: true },
	lastgridiron: { type: String, required: true },
	lastskyring: { type: String, required: true },
	lastfraywind: { type: String, required: true}
});

module.exports = mongoose.model("Status", StatusSchema, "Status");
