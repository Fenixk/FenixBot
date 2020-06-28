# Fenix Bot - Tera PvP

Hello, I'm Fenix, I've been playing on Seren for 8 years. I've made the observation that BGs are popping thanks to organized raid in Mystel and discord messages. However, a lot of people are missing these notifications. That's why, to improve the communication and make BGs pop faster & last longer, I have created the Fenix Bot. It will announce when BGs are popping over all discord servers and update general status of battleground activities. 

## What does the bot do ?

- Update overall battleground status: 

![alt text](https://images-ext-2.discordapp.net/external/evBp1F3Qf4pSxuLv6lTOmTPJgZFzDwKnZyl-2wOkdxc/https/i.ibb.co/m9F3YZp/fenix-status.png)
- Make a notification when battlegrounds start popping: 

![alt text](https://images-ext-2.discordapp.net/external/bvf0sCmZBv53_AYe31c-9RLvK0RDKQGxByNOZYdg-V4/https/i.ibb.co/fDTFs4M/fenix-notifs.png)

## How does the bot work ? 

- Automatic detection with Discord Game Activity.
- Manual detection with Organizers. Organizers are trustworthy active motivated players who make PvP alive and organize raids, bg parties and events IG.


## What are the commands ? 

Here are the commands Users can do : 

- `!status` : To have the current status of all battlegrounds.
- `!jackpot` : To have the official jackpot schedule by Gameforge.
- `!help` : To have the list of all available commands.
- `!troll` : To have funny reply by the bot.

Here are the commands Administrators can do :

- `!init #channel` : To change the channel where the Battleground notifications and Battleground status are sent.
- `!notif on/off` : To enable or disabled battleground notifications on your server. Does not affect battleground status update.

Here are the commands Organizers can do : 

- `!pop bgName` :  To manually trigger Battleground notifications and Battleground status update for all servers.
- `!cancel bgName` : To manually remove Battleground notifications for all servers.

## What are the bot permissions ?

Bot permissions are really minimal. It does not require any adminitration permissions. It will not view channels if you don't add it on it.

[MANDATORY] : 
- Read Messages : Bot needs to read its own messages.
- Embed Links : Bot is using discord Embed message to create beautiful messages.
- Read Message History : Bot needs to read its own messages.
- Send Messages : When initizalied, Bot needs to send the general status message. Then it needs to send notification messages. 

[OPTIONAL] : 
- Mention everyone, here and roles. 

## How can I get it ? 

- Use this link to add the bot to your server : https://discord.com/api/oauth2/authorize?client_id=679747405285163039&permissions=215040&scope=bot
- Once the bot is added, you will see it in the list member of your discord.
- Add bot permissions to the channel (Read Messages, Send Messages, Embed Links, Read Message History, Mention everyone).
- Use the command `!init #channel` (in a channel where the bot can read you).




Made by Fenix#0262 contact me if you have any issue.
