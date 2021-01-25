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
			green: "10/10",
			orange: "??/10",
			red: "0/10"
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
			footer: "Shore Hold is a PvP instance where people fight in 7vs7 under the sun!"
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
			title: "Champion's Skyring (Team)",
			description: {
				green: "Champion's Skyring (Team) is currently popping 👑 !",
				orange: "Unknown Status. Check with Tera PvP EU moderators !",
				red: "Not popping."
			},
			footer: "Champion' Skyring is a PvP instance where the best fight happens !!"
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
	},
	ru: {
		[CORSAIR_TYPE]: {
			title: "Твердыня корсаров",
			description: {
				green: "Твердыня корсаров запущена  ⚔️ !",
				orange: "Неизвестный статус. Проверьте вместе с Tera PVP EU модераторами!",
				red: "Не запущена."
			},
			footer: "Твердыня корсаров это пвп баттлграунд, где игроки дерутся 20х20!"
		},
		[SHORE_TYPE]: {
			title: "Битва на побережье",
			description: {
				green: "Битва на побережье запущена 🌴 !",
				orange: "Неизвестный статус. Проверьте вместе с Tera PVP EU модераторами!",
				red: "Не запущена."
			},
			footer: "Битва на побережье это пвп баттлграунд, где игроки дерутся 7х7 под солнцем"
		},
		[GRIDIRON_TYPE]: {
			title: "Подземная арена",
			description: {
				green: "Подземная арена запущена ⚔️ !",
				orange: "Неизвестный статус. Проверьте вместе с Tera PVP EU модераторами!",
				red: "Не запущена."
			},
			footer: "Подземная арена это пвп баттлграунд, где игроки в формате 10х10",
		},
		[SKYRING_TYPE]: {
			title: "Небесная арена",
			description: {
				green: "Небесная арена запущена 👑 !",
				orange: "Неизвестный статус. Проверьте вместе с Tera PVP EU модераторами!",
				red: "Не запущена."
			},
			footer: "Небесная арена это пвп арена, где происходят лучшие бои!!"
		}, 
	},
	de: {
		[CORSAIR_TYPE]: {
			title: "Korsarenfestung",
			description: {
				green: "Die Korsarenfestung wird momentan gespielt ⚔️ !",
				orange: "Unbekannter Status. Fragen Sie bei den Tera PvP EU Moderatoren nach !",
				red: "Momentan nicht gespielt."
			},
			footer: "Die Korsarenfestung ist eine Pvp Instanz in der man 20vs20 kämpft !"
		},
		[SHORE_TYPE]: {
			title: "Küstenterritorium",
			description: {
				green: "Küstenterritorium wird momentan gespielt 🌴 !",
				orange: "Unbekannter Status. Fragen Sie bei den Tera PvP EU Moderatoren nach !",
				red: "Momentan nicht gespielt."
			},
			footer: "Das Küstenterritorium ist eine 7vs7 PvP Instanz in der Sonne !!!"
		},
		[GRIDIRON_TYPE]: {
			title: "Unterirdisches Schlachtfeld",
			description: {
				green: "Das Unterirdische Schlachtfeld wird momentan gespielt ⚔️ !",
				orange: "Unbekannter Status. Fragen Sie bei den Tera PvP EU Moderatoren nach !",
				red: "Momentan nicht gespielt."
			},
			footer: "Das Unterirdische Schlachtfeld ist eine 10vs10, stark auf PvP basierende."
		},
		[SKYRING_TYPE]: {
			title: "Himmelsring der Helden",
			description: {
				green: "Himmelsring der Helden wird momentan gespielt 👑 !",
				orange: "Unbekannter Status. Fragen Sie bei den Tera PvP EU Moderatoren nach !",
				red: "Momentan nicht gespielt."
			},
			footer: "Im Himmelsring der Helden finden die besten PvP Kämpfe statt !"
		}, 
	},
}

module.exports = bgDescriptor;