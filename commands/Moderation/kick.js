const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  let reason = args.splice(1).join(" ") || "Aucune raison spécifiée";
  user
    ? message.guild.member(user).kick(reason)
    : message.channel.send("L'utilisateur n'existe pas.");

  const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`)
    .setColor("#ffa500")
    .setDescription(`**Action**: kick\n**Raison**: ${reason}`)
    .setThumbnail(user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  client.channels.cache.get("807661078666281070").send(embed);
};

module.exports.help = {
  name: "kick",
  aliases: ["kick"],
  category: "moderation",
  description: "Kick un utilisateur",
  usage: "<user> <raison>",
  adminMention: false,
  permissions: true,
  args: true,
  mention: true
};
