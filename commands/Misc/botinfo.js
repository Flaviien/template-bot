const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor("#B4E0E0")
    .setAuthor(`${client.user.username} Info`, client.user.avatarURL())
    .addFields(
      {
        name: "Mémoire",
        value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
          2
        )} MB`,
        inline: true
      },
      {
        name: "Uptime",
        value: `${Math.floor(client.uptime / 1000 / 60).toString()} ${
          Math.floor(client.uptime / 1000 / 60) === 0 ? "minute" : "minutes"
        }`,
        inline: true
      },
      {
        name: "\u200b",
        value: "\u200b",
        inline: true
      },
      {
        name: "Serveurs",
        value: `${client.guilds.cache.size.toString()}`,
        inline: true
      },
      {
        name: "Salons",
        value: `${client.channels.cache.size.toString()}`,
        inline: true
      },
      {
        name: "Utilisateurs",
        value: `${client.guilds.cache
          .map((g) => g.memberCount)
          .reduce((a, b) => a + b)}`,
        inline: true
      },
      {
        name: "Versions",
        value: "discord.js@12.2.0",
        inline: true
      },
      {
        name: "Source",
        value: "[GitHub](https://github.com)",
        inline: true
      },
      {
        name: "Support",
        value: "[Server invite](https://discord.gg/azertyuiop)",
        inline: true
      }
    );
  message.channel.send(embed);
};

module.exports.help = {
  name: "botinfo",
  aliases: ["botinfo"],
  category: "misc",
  description: "Renvoie des informations concernant le bot",
  usage: "",
  adminMention: false,
  permissions: false,
  args: false,
  mention: false
};
