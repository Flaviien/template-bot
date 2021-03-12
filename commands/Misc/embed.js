const { MessageEmbed, MessageAttachment } = require("discord.js");
const monImg = new MessageAttachment("./assets/img/cours_2.jpg");

/**
 * Pour mettre une image dans un embed, on doit:
 * - Importer MessageAttachment
 * - Créer un new MessageAttachment('path de notre image') (Le path est par rapport à notre fichier index.js)
 * - Dans le embed, appeller attachFiles(monImg)
 * - Ensuite on peux utiliser notre image dans un setImage('attachment://fileName.extension') ou un setThumbnail('attachment://fileName.extension')
 */

module.exports.run = (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor("#dc143c")
    .setTitle("Titre de l'embed")
    .attachFiles(monImg)
    .setImage("attachment://cours_2.jpg")
    .setURL("https://google.com")
    .setDescription("Description de l'embed")
    .setThumbnail(client.user.displayAvatarURL())
    .addField("Je suis un champ", "Je suis sa valeur")
    .setTimestamp()
    .setFooter("Je suis sur le footer");

  message.channel.send(embed);
};

module.exports.help = {
  name: "embed",
  aliases: ["embed"],
  category: "misc",
  description: "Renvoie un embed",
  usage: "",
  adminMention: false,
  permissions: true,
  args: false,
  mention: false
};
