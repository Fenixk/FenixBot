const { CORSAIR_TYPE, SHORE_TYPE, GRIDIRON_TYPE, SKYRING_TYPE } = require('./battleground-types.js');

const bgDescriptor = {
	[CORSAIR_TYPE]: {
		title: "Corsair Stronghold",
		description: {
			green: "Corsair Stronghold is currently popping ⚔️ !",
			orange: "Unknown Status. Check with Tera PvP EU moderators !",
			red: "Not popping."
		},
		image: "https://cdn.glitch.com/cbdc508c-c599-4570-a02a-93ea04cd50ac%2Fcorsair.jpg?v=1592260774851",
		footer: "Corsair' Stronghold is a PvP instance where people fight in 20vs20 !",
		players: {
			green: "40/40",
			orange: "??/40",
			red: "0/40"
		},
		timer: 120
	},
	[SHORE_TYPE]: {
		title: "Shore Hold",
		description: {
			green: "Shore Hold is currently popping 🌴 !",
			orange: "Unknown Status. Check with Tera PvP EU moderators !",
			red: "Not popping."
		},
		image: "https://cdn.glitch.com/cbdc508c-c599-4570-a02a-93ea04cd50ac%2Fshore.jpg?v=1592260800883",
		footer: "Shore Hold is a PvP instance where people fight in 7vs7 in the sun !!!",
		players: {
			green: "14/14",
			orange: "??/14",
			red: "0/14"
		},
		timer: 60 
	},
	[GRIDIRON_TYPE]: {
		title: "Gridiron",
		description: {
			green: "Gridiron is currently popping ⚔️ !",
			orange: "Unknown Status. Check with Tera PvP EU moderators !",
			red: "Not popping."
		},
		image: "https://cdn.glitch.com/cbdc508c-c599-4570-a02a-93ea04cd50ac%2Fgridiron.jpg?v=1592260942453",
		footer: "Gridiron is a PvP instance where players fight hard in a 10v10 arena.",
		players: {
			green: "20/20",
			orange: "??/20",
			red: "0/20"
		},
		timer: 60 
	},
	[SKYRING_TYPE]: {
		title: "Champion's Skyring",
		description: {
			green: "Champion's Skyring is currently popping 👑 !",
			orange: "Unknown Status. Check with Tera PvP EU moderators !",
			red: "Not popping."
		},
		image: "https://cdn.glitch.com/cbdc508c-c599-4570-a02a-93ea04cd50ac%2Fskyring.jpg?v=1592260829539",
		footer: "Champion' Skyring is a PvP instance where the best fight happend !!",
		players: {
			green: "6/6",
			orange: "?/6",
			red: "0/6"
		},
		timer: 60
	}, 
}

module.exports = bgDescriptor;