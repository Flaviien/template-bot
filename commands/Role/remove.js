module.exports.run = (client, message, args) => {
  let role = message.guild.roles.cache.find((r) => r.name === args.toString()); //on find le role qui est envoyer en args
  if (role) {
    //On vérifie que le role existe
    if (!message.member.roles.cache.has(role.id)) {
      //On vérifie que l'utilisateur ai le role
      return message.channel.send(
        "Vous ne possédez pas ce rôle ! Essayez à nouveau !"
      );
    }

    message.member.roles
      .remove(role)
      .then((m) =>
        message.channel.send(`Vous ne possédez plus le role ${role}`)
      )
      .catch((e) => console.log(e));
  } else {
    message.channel.send(
      "Vous ne pouvez pas enlever un rôle qui n'existe pas !"
    );
  }
};

module.exports.help = {
  name: "remove",
  aliases: ["remove"],
  category: "role",
  description: "Supprimer un rôle",
  usage: "<role>",
  adminMention: true,
  permissions: true,
  args: true,
  mention: false
};
