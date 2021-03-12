const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first());
  if (isNaN(args[1]) || args[1] < 1 || args[1] > 25)
    return message.reply("Il faut spécifier un ***nombre*** entre 1 et 25!");

  const messages = (
    await message.channel.messages.fetch({
      limit: 100,
      before: message.id
    })
  )
    .filter((a) => a.author.id === user.id)
    .array();

  messages.length = Math.min(args[1], messages.length);

  if (messages.length === 0)
    return message.reply("Aucun message à supprimer sur cette utilisateur");
  if (!user) return message.reply("L'utilisateur n'existe pas.");

  if (messages.length === 1) await message[0].delete();
  else await message.channel.bulkDelete(messages);

  message.delete();

  const embed = new MessageEmbed()
    .setAuthor(message.author.username)
    .setColor("#287db5")
    .setDescription(
      `**Action**: prune\n**Nbr de messages**: ${args[1]}\n**Utilisateur**: ${args[0]}`
    );

  client.channels.cache.get("807661078666281070").send(embed);
};

module.exports.help = {
  name: "prune",
  aliases: ["prune"],
  category: "moderation",
  description:
    "Purge un nombre de message spécifié sur un utilisateur spécifié",
  usage: "<user> <nbr_messages>",
  adminMention: true,
  permissions: true,
  args: true,
  mention: true
};
