module.exports = {
	name: 'troll',
	description: 'Troll feature to send funny message to users.',
  aliases: ['troll'],
	execute(client, message) {
    const troll = [
      "Fenix is the best, he's the best slayer EUW and he's my creator... (HELP ME I'M HIS PRISONER, HE FORCES ME TO SAY THAT.)",
      "Hey ! How are you ?",
      "Why are you so bad at PvP ?",
      "Don't spam this command, it's a secret.",
      "Lol wtf ?",
      "Why are you doing this command ? Fenix sucks..",
      "May the force be with you",
      "May the force be with you",
      "Shut up.",
      "Euhm ?",
      "I can give you some weird elin website from my master browser history..",
      "Baguette 🥖 ? You want some 🥖 ?",
      "I hate you",
      "I fucking hate you",
      "I fucking hate you so much",
      "Who is the best slayer ? Fenix, Fenix or Fenix ?",
      "Why are you talking to a bot ? Are you lonely ?",
      "I love you",
      "Stop spamming me or I tell everyone you send me in whisper that you love Wikï 's feet",
      "What can I do for you, young adventueer ?",
      "Humans.. pathetic",
      "Can you please shut up ? I'm working",
      "Hey how are you ? I saw you yesterday in BG, you were dead.",
      "Wait what, can you see my message ? I'm Fenix ! The bot has taken possession of my body, I'm prisoner !",
      "Wait what, can you see my message ? I'm Fenix ! The bot has taken possession of my body, I'm prisoner !",
      "HELP ME ! I'M HIS PRISONER",
      "Hello there.",
      "Hello there.",
      ";)",
      "Stop sending me nudes in PM please. I'm a robot I don't care about your male genitals.",
      "Yes ? What do you want ?",
      "Hello. Oh it's you ! I have what you requested earlier: http://elin-horse-crazydevil-sex.com",
      "Hello. Oh it's you ! I have what you requested earlier: http://elin-horse-crazydevil-sex.com",
      "Hey how are you ? I saw you yesterday in BG, you were dead.",
      "Hey how are you ? I saw you yesterday in BG, you were dead.",
      "Hello. I'm FenixBot. I'm human best friend",
      "Yes ?",
      "Can I do something for you ? No I'm joking I don't care.",
      "Hey ! You're the best PvP player I've seen so far !",
      "Wow, the best PvP player just used the command !!",
      "Keep going ! You're so great !",
      "you are just the best pvp player.",
      "I've seen you in bg yesterday. Woaw you're just too strong !",
      "I've seen you in bg yesterday. Woaw you're just too strong !",
      "Do you want some 🥖 🥖 🥖 ?",
      "Here is my mood right now: https://tenor.com/view/happy-obi-wan-kenobi-star-gif-10168701",
      "It is late. I think you should go to sleep.",
      "https://cdn.discordapp.com/attachments/300069661804986370/613876673359642625/JPEG_20190815_194335.png",
      "https://cdn.discordapp.com/attachments/300069661804986370/613876673359642625/JPEG_20190815_194335.png"
    ];
                   
        const randomNumber = Math.floor(Math.random() * Math.floor(troll.length-1));
    
        message.reply(troll[randomNumber]);
    
        return;
  }
};
