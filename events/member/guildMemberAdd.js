const { MessageEmbed } = require("discord.js");

module.exports = async (client, member) => {
  const settings = await client.getGuild(member.guild);
  let msg = settings.welcomeMessage;

  if (msg.includes("{{user}}")) msg = msg.replace("{{user}}", member);

  const embed = new MessageEmbed()
    .setAuthor(
      `${member.displayName} (${member.id})`,
      member.user.displayAvatarURL()
    )
    .setColor("#35f092")
    .setFooter("Un utilisateur a rejoint")
    .setTimestamp();

  client.channels.cache.get("807661078666281070").send(embed);
  client.channels.cache.get("807661078666281070").send(msg);

  await client.createUser({
    guildID: member.guild.id,
    guildName: member.guild.name,
    userID: member.id,
    username: member.user.tag
  });
};
