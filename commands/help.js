module.exports = {
	name: 'help',
	description: 'Send in author PM the list of commands.',
	aliases: ['help', 'fenix'],
	execute(client, message) {
		const helpMessage =
			"Hello, I'm **Fenix Bot** ! To start using me, please use `!init #channel`. I have 2 main utilities :	\n\n" + 
			"• Update battleground's status\n" +
			"• Make a notification when battlegrounds are popping !\n\n" +
			"You can join Menma Tera here : https://discord.gg/menmastera\n\n" +
			"Here are the commands Users can do : \n\n" +
			"- **!status** : To have the current status of all battlegrounds.\n" +
			"- **!jackpot** : To have the official jackpot schedule.\n" +
			"- **!help** : To have the list of all available commands.\n" +
			"- **!info** : To have the result of the auto detection for battlegrounds.\n" +
			"- **!troll** : To have funny reply by the bot.\n\n" +
			"Here are the commands Administrators can do : \n\n" +
			"- **!init _#MyChannelName_** : To change the channel where the Battleground notifications and Battleground status are sent.\n" +
			"- **!lang _fr/de/en/ru_** : To change the bot message language and time zone.\n" +
			"- **!bg-role _@roleName_** : To change the @here to @role inside the bot messages, default is @here.\n" +
			"- **!bg-role _off_** : To remove the @ ping from the message. The message is still sent but without @role notification.\n" +
			"- **!notif _on_** or **!notif _off_** : To enable or disabled battleground notifications on your server. Does not affect battleground status update.\n\n" +
			"Here are the commands Organizers can do : \n\n" +
			"- **!pop _bgName_** : To make Battleground announcement for all servers.\n" +
			"- **!cancel _bgName_** : To remove Battleground announcement for all servers.\n\n" +
			"List of all availaible **bgName**: corsair-stronghold, coco, corsair, cs, shore-hold, shore, sh, gridiron, gridi, gr, champion-skyring, skyring, 3v3, 3s.\n\n" +
			"**Restrictions:**\n" +
			"• Only members with 'Organizers' role from Menma Tera discords are authorized to make announcement.\n" +
			"• Organizer commands work only on 'Menma Tera' discord'.\n" +
			"• Multiple notifications for the same battleground is not possible.\n" +
			"• Battleground Notifications work only between 12h00 - 01h00.\n\n" +
			"Contact Fenix#0001 if you have questions";

		message.author.send(helpMessage);

		return ;

	},
};
