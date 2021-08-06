let Discord = require("discord.js");
let client = new Discord.Client();
client.on('guildMemberAdd', member => {
  if (!member.guild) return;
  let guild = member.guild
  let channel = guild.channels.cache.find(c => c.name === "welcome");

  let membercount = guild.members
  if (!channel) return;
  
  let embed = new Discord.MessageEmbed() 
    .setColor("GREEN") 
    .setTitle("New Server Member!")
    .setDescription(`Welcome, ${member.user.tag} to **${guild.name}!**`)
    .setThumbnail(member.user.displayAvatarURL())
    //.setFooter(`You are the ${membercount}th member to join`);
  channel.send(embed);
});


