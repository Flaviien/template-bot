module.exports.run = (client, message, args) => {
  let role = message.guild.roles.cache.find((r) => r.name === args.toString()); //on find le role qui est envoyer en args
  if (role) {
    //On vérifie que le role existe
    if (message.member.roles.cache.has(role.id)) {
      //On vérifie que l'utilisateur n'ai pas déjà le role
      return message.channel.send(
        "Vous avez déjà ce rôle ! Essayez à nouveau !"
      );
    }
    if (role.permissions.has("KICK_MEMBERS")) {
      //On vérifie que l'utilisateur à le droit d'avoir ce rôle en vérifiant les permissions. Par exemple KICK_MEMBERS (ce role permet d'expulser des membres)
      //Ce renseigner plus sur les permissions = https://discord.js.org/#/docs/main/stable/typedef/PermissionResolvable
      // ==> Voir les flags
      return message.channel.send("Vous ne pouvez pas avoir ce rôle !");
    }

    message.member.roles
      .add(role)
      .then((m) =>
        message.channel.send(`Vous possédez maintenant le role ${role}`)
      )
      .catch((e) => console.log(e));
  } else {
    message.channel.send("Le rôle n'existe pas !");
  }
};

module.exports.help = {
  name: "add",
  aliases: ["add"],
  category: "role",
  description: "Ajouter un rôle",
  usage: "<role>",
  adminMention: true,
  permissions: true,
  args: true,
  mention: false
};
