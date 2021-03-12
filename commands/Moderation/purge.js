const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (isNaN(args[0]) || args[0] < 1 || args[0] > 25)
    return message.reply("Il faut spécifier un ***nombre*** entre 1 et 25!");

  const messages = await message.channel.messages.fetch({
    limit: Math.min(args[0], 25),
    before: message.id
  });

  message.delete();
  await message.channel.bulkDelete(messages);

  const embed = new MessageEmbed()
    .setAuthor(message.author.username)
    .setColor("#287db5")
    .setDescription(
      `**Action**: purge\n**Nbr de messages**: ${args[0]}\n**Salon**: ${message.channel}`
    );

  client.channels.cache.get("807661078666281070").send(embed);
};

module.exports.help = {
  name: "purge",
  aliases: ["purge", "clear"],
  category: "moderation",
  description: "Purge un nombre de message spécifié",
  usage: "<nbr_messages>",
  adminMention: false,
  permissions: true,
  args: true,
  mention: false
};
