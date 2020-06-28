const bgDescriptors = require('../constants/battleground-descriptors');
const createEmbed = require('../functions/createEmbed.js');

const sendNotification = (channel, bgType, guild) => {
  let botMessages;
  let exist = false;
  let statusExist = false;
  const announceEmbed = createEmbed(bgType, 'green');
  const announceMessage = "Hello @here, **__" + bgType.charAt(0).toUpperCase() + bgType.slice(1) + "__** is currently popping !";

  channel.messages.fetch({ limit: 100 }).then(messages => {
    botMessages = messages.filter(msg => msg.author.bot);
    if (botMessages.array().length > 0){
      // Find the good Embed.
      for (let i=0; i < botMessages.array().length; i++){
        if (botMessages.array()[i].embeds[0] && botMessages.array()[i].embeds[0].title === bgDescriptors[bgType].title) {
          botMessages.array()[i].edit(announceEmbed).then().catch(err => console.log('Failed to edit embed for SEND NOTIFICATION in ' + guild));
          exist = true;
        }
        if (botMessages.array()[i].embeds[0] && botMessages.array()[i].embeds[0].title === 'Battleground Activity'){
          statusExist = true;
        }
      }
    }

    if (statusExist === false) {
      setTimeout(() => channel.send(announceMessage, announceEmbed), 3000);
    }
    if (exist === false) {
      console.log('Send ' + bgType + ' notification to ' + guild);
      channel.send(announceMessage, announceEmbed);
    }
  })
  .catch(e => console.log('Failed to fetch message for SEND NOTIFICATION in ' + guild));
  
  return;
  
}


module.exports = sendNotification;

