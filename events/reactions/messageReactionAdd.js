module.exports = async (client, messageReaction, user) => {
  const message = messageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(
    (c) => c.id === "807661078666281070"
  );
  const csgoRole = message.guild.roles.cache.get("806576573339271218");
  const valorantRole = message.guild.roles.cache.get("806576571246837821");

  if (member.user.bot) return;

  if (messageReaction.partial) {
    //Une fois que les partials sont autorisées dans notre client, on peux les utiliser comme ceci pour "récuperer notre cache"
    await messageReaction.fetch();
    message.channel.send(
      "Le cache est désormais réactivé sur ce message, re-cliquez sur la réaction pour que le comportement attendu soit rétabli"
    );
    return;
  }

  if (["🆗", "📖"].includes(emoji) && message.channel.id === channel.id) {
    switch (emoji) {
      case "🆗":
        member.roles.add(csgoRole);
        message.channel.send(
          `Le rôle ${csgoRole.name} a été ajouté avec succès !`
        );
        break;
      case "📖":
        member.roles.add(valorantRole);
        message.channel.send(
          `Le rôle ${valorantRole.name} a été ajouté avec succès !`
        );
        break;
    }
  }
};
