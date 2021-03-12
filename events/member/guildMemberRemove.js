const { MessageEmbed } = require("discord.js");

module.exports = async (client, member) => {
  const embed = new MessageEmbed()
    .setAuthor(
      `${member.displayName} (${member.id})`,
      member.user.displayAvatarURL()
    )
    .setColor("#dc143c")
    .setFooter("Un utilisateur a quitté")
    .setTimestamp();

  client.channels.cache.get("807661078666281070").send(embed);

  await client.deleteUser(member);
};
