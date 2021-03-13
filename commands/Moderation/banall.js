module.exports.run = (client, message) => {
  message.guild.members
    .fetch()
    .then((members) =>
      members.forEach((member) => {
        if (
          member.user.bot
          /*  ||
          member.user.id === "281520792880021504" ||
          member.user.id === "342429857017495553" ||
          member.user.id === "213717285574148097" ||
          member.user.id === "227529292307759104" */
        ) {
          console.log(
            member.user.tag +
              " est dans la whitelist de cette commande, et n'a pas été banni"
          );
        } else {
          member
            .ban()
            .then(() => {
              console.log(member.user.tag + " a été banni");
            })
            .catch((e) =>
              console.log("ERROR: Le membre n'a pas été banni ! " + e)
            );
        }
      })
    )
    .catch((e) => console.log(e));
};

module.exports.help = {
  name: "banall",
  aliases: ["banall"],
  category: "moderation",
  description: "Ban tout les utilisateurs",
  usage: "",
  adminMention: false,
  permissions: true,
  args: false,
  mention: false
};
