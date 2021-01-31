const { corsairAliases, shoreAliases, gridironAliases, skyringAliases, fraywindAliases } = require('../config.json');
const { CORSAIR_TYPE, SHORE_TYPE, GRIDIRON_TYPE, SKYRING_TYPE, FRAYWIND_TYPE } = require('../constants/battleground-types.js');

const getBattlegroundType = (message, argument) => {
		if (!argument) argument = '';

		if (corsairAliases.includes(argument.toLowerCase())) return CORSAIR_TYPE;
		else if (shoreAliases.includes(argument.toLowerCase())) return SHORE_TYPE;
		else if (gridironAliases.includes(argument.toLowerCase())) return GRIDIRON_TYPE;
		else if (skyringAliases.includes(argument.toLowerCase())) return SKYRING_TYPE;
		else if (fraywindAliases.includes(argument.toLowerCase())) return FRAYWIND_TYPE;

		else if (message.channel.name === 'corsair-stronghold') return CORSAIR_TYPE;
		else if (message.channel.name === 'shore-hold') return SHORE_TYPE;
		else if (message.channel.name === 'gridiron') return GRIDIRON_TYPE;
		else if (message.channel.name === 'fraywind-canyon') return FRAYWIND_TYPE;
		else return null;
}

module.exports = getBattlegroundType;
