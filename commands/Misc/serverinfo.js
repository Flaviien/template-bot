const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
  const guild = message.guild;

  const embed = new MessageEmbed()
    .setColor("#C016FF")
    .setThumbnail(guild.iconURL())
    .addField(
      `Plus d'informations à propos de: **${guild.name}**`,
      `· ID: ${guild.id}
    · Owner: ${guild.owner.user.tag} (${guild.ownerID})
    · Roles: ${guild.roles.cache.size}
    · Crée le: ${guild.createdAt}
    `
    );

  message.channel.send(embed);
  message.channel.send(
    //"Votre serveur possède .2. salons textuels et .3. salons vocaux avec .24. membres"
    `Votre serveur possède ${
      guild.channels.cache.filter((ch) => ch.type === "text").size
    } salons textuels et ${
      guild.channels.cache.filter((ch) => ch.type === "voice").size
    } salons vocaux avec ${guild.memberCount - 1} ${
      guild.memberCount - 1 === 1 ? "membre" : "membres"
    }.`
  );
};

module.exports.help = {
  name: "serverinfo",
  aliases: ["serverinfo"],
  category: "misc",
  description: "Renvoie des informations concernant le serveur",
  usage: "",
  adminMention: false,
  permissions: false,
  args: false,
  mention: false
};
