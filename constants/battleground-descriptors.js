const { CORSAIR_TYPE, SHORE_TYPE, GRIDIRON_TYPE, SKYRING_TYPE } = require('./battleground-types.js');

const bgDescriptor = {
	url: 'https://discord.gg/UTuDSMk',
	[CORSAIR_TYPE]: {
		image: "https://cdn.glitch.com/cbdc508c-c599-4570-a02a-93ea04cd50ac%2Fcorsair.jpg?v=1592260774851",
		players: {
			green: "40/40",
			orange: "??/40",
			red: "0/40"
		},
		timer: 120
	},
	[SHORE_TYPE]: {
		image: "https://cdn.glitch.com/cbdc508c-c599-4570-a02a-93ea04cd50ac%2Fshore.jpg?v=1592260800883",
		players: {
			green: "14/14",
			orange: "??/14",
			red: "0/14"
		},
		timer: 60 
	},
	[GRIDIRON_TYPE]: {
		image: "https://cdn.glitch.com/cbdc508c-c599-4570-a02a-93ea04cd50ac%2Fgridiron.jpg?v=1592260942453",
		players: {
			green: "20/20",
			orange: "??/20",
			red: "0/20"
		},
		timer: 60 
	},
	[SKYRING_TYPE]: {
		image: "https://cdn.glitch.com/cbdc508c-c599-4570-a02a-93ea04cd50ac%2Fskyring.jpg?v=1592260829539",
		players: {
			green: "6/6",
			orange: "?/6",
			red: "0/6"
		},
		timer: 60
	},
	en: {
		[CORSAIR_TYPE]: {
			title: "Corsair Stronghold",
			description: {
				green: "Corsair Stronghold is currently popping ⚔️ !",
				orange: "Unknown Status. Check with Tera PvP EU moderators !",
				red: "Not popping."
			},
			footer: "Corsair' Stronghold is a PvP instance where people fight in 20vs20 !"
		},
		[SHORE_TYPE]: {
			title: "Shore Hold",
			description: {
				green: "Shore Hold is currently popping 🌴 !",
				orange: "Unknown Status. Check with Tera PvP EU moderators !",
				red: "Not popping."
			},
			footer: "Shore Hold is a PvP instance where people fight in 7vs7 in the sun !!!"
		},
		[GRIDIRON_TYPE]: {
			title: "Gridiron",
			description: {
				green: "Gridiron is currently popping ⚔️ !",
				orange: "Unknown Status. Check with Tera PvP EU moderators !",
				red: "Not popping."
			},
			footer: "Gridiron is a PvP instance where players fight hard in a 10v10 arena."
		},
		[SKYRING_TYPE]: {
			title: "Champion's Skyring",
			description: {
				green: "Champion's Skyring is currently popping 👑 !",
				orange: "Unknown Status. Check with Tera PvP EU moderators !",
				red: "Not popping."
			},
			footer: "Champion' Skyring is a PvP instance where the best fight happend !!"
		}, 
	},
	fr: {
		[CORSAIR_TYPE]: {
			title: "Fort des corsaires",
			description: {
				green: "Fort des corsaires est actuellement en cours ⚔️ !",
				orange: "Status inconnu. Demander aux modérateurs sur Tera PvP EU !",
				red: "Aucun en cours."
			},
			footer: "Fort des corsaires est une instance PvP où 20 joueurs s'affrontent !"
		},
		[SHORE_TYPE]: {
			title: "Territoire Côtier",
			description: {
				green: "Territoire côtier est actuellement en cours 🌴 !",
				orange: "Status inconnu. Demander aux modérateurs sur Tera PvP EU !",
				red: "Aucun en cours."
			},
			footer: "Territoire côtier est une instance PvP où 7 joueurs PvP s'affrontent !"
		},
		[GRIDIRON_TYPE]: {
			title: "Gridiron",
			description: {
				green: "Champ de bataille souterrain est en cours ⚔️ !",
				orange: "Status inconnu. Demander aux modérateurs sur Tera PvP EU !",
				red: "Aucun en cours."
			},
			footer: "Champ de bataille souterrain voit s'affronter 10 joueurs face à face."
		},
		[SKYRING_TYPE]: {
			title: "Cercle Céleste des Champions",
			description: {
				green: "Cercle Céleste des Champions est actuellement en cours 👑 !",
				orange: "Status inconnu. Demander aux modérateurs sur Tera PvP EU !",
				red: "Aucun en cours."
			},
			footer: "Cercle Céleste des Champions est une instance PvP de haut niveau !!"
		}
	} 
}

module.exports = bgDescriptor;