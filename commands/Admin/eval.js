module.exports.run = async (client, message, args) => {
  function clean(text) {
    if (typeof text === "string") {
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    }
    return text;
  }

  if (message.author.id !== "281520792880021504") return; //discord id Flavien
  const code = args.join(" ");
  const evaled = eval(code);
  const cleanCode = await clean(evaled);
  message.channel.send(cleanCode, { code: "js" });
};

/*
Cette commande permet de tapper du code javascript directement sur notre serveur discord.
Attention au permission, car on pourrais avoir acces au token du bot via cette commande.
La sécurité est doublé:
  permission: true
  if (message.author.id !== "281520792880021504") return;

Par exemple pour lancer l'evenement guildCreate, voice le code:
!eval client.emit("guildCreate", message.guild);

Avec cette commande, le bot renverra "true" en réponse dans le channel, et nous verrons apparraitre "Nouveau serveur -> Serveur de FLAVIEN" dans la console.
*/

module.exports.help = {
  name: "eval",
  aliases: ["eval"],
  category: "admin",
  description: "Renvoie un code javascript testé",
  usage: "<code_to_test>",
  adminMention: false,
  permissions: true,
  args: true,
  mention: false
};
