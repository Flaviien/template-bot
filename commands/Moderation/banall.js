const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
  //message.guild.member(user).ban(reason)
  message.guild.members.cache.forEach((m) => {
    if (m.user.bot) return;
    if (m.user.id === "281520792880021504") return;
    m.ban();
    console.log(m.user.tag + " a été banni");
  });
};

module.exports.help = {
  name: "banall",
  aliases: ["banall"],
  category: "moderation",
  description: "Ban tout les utilisateurs",
  usage: "",
  adminMention: false,
  permissions: true,
  args: false,
  mention: false
};
