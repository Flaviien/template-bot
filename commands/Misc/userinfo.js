const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
  let member = message.member;
  if (args[0]) member = message.guild.member(message.mentions.users.first());
  let user = member.user;

  const embed = new MessageEmbed()
    .setColor("CCE0B4")
    .setThumbnail(user.displayAvatarURL)
    .addField(
      `Plus d'informations à propos de **${user.username}**`,
      `· Nom: ${user.tag}
    · Bot: ${user.bot ? "true" : "false"}
    · Créé le: ${user.createdAt}
    · Statut: ${user.presence.status.toUpperCase()}`
    );
  message.channel.send(embed);
  message.channel.send(
    `L'utilisateur **${user.username}** ${
      member.nickname === null || member.nickname === undefined
        ? ""
        : `aka **${member.nickname}**`
    } a rejoint le ${
      member.joinedAt
    } et possède les rôles suivants: ${member.roles.cache
      .map((roles) => `\`${roles.name}\``)
      .join(", ")}.`
  );
};

module.exports.help = {
  name: "userinfo",
  aliases: ["userinfo"],
  category: "misc",
  description:
    "Renvoie des informations concernant un utilisateur, ou sur vous-même si ne mentionné personne.",
  usage: "[<mentionned_user>]",
  adminMention: false,
  permissions: false,
  args: false,
  mention: false
};
