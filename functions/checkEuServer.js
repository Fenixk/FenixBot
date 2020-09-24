const { serverName } = require('../config.json');

const checkEuServer = (message) => {
	if (!message) 
		return false;
		
	for (server in serverName) {
		if (message.includes(server))
			return true;
	}
	return false;
}

module.exports = checkEuServer;
