const { MessageEmbed, MessageManager } = require("discord.js");

module.exports.run = (client, message, args) => {
  const csgoRole = message.guild.roles.cache.get("806576573339271218");
  const valorantRole = message.guild.roles.cache.get("806576571246837821");

  const embed = new MessageEmbed()
    .setTitle("Rôles")
    .setDescription(
      "Cliquez sur une des réactions ci-dessous pour obtenir le rôle correspondant"
    )
    .setColor("#dc143c")
    .addField(
      "Les rôles Disponibles:",
      `
      🆗 - ${csgoRole.toString()}
      📖 - ${valorantRole.toString()}
      `
    );

  client.channels.cache
    .get("807661078666281070")
    .send(embed)
    .then(async (msg) => {
      await msg.react("🆗");
      await msg.react("📖");
    });
};

module.exports.help = {
  name: "allroles",
  aliases: ["allroles"],
  category: "reactions",
  description: "Renvoie un message avec des réactions",
  usage: "",
  adminMention: false,
  permissions: true,
  args: false,
  mention: false
};
