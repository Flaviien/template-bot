const { Client } = require("discord.js");
const mongoose = require("mongoose");
const Guild = require("../models/guild");
const User = require("../models/user");

module.exports = (client) => {
  /*GUILD*/
  client.createGuild = async (guild) => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, guild);
    const createGuild = await new Guild(merged);

    createGuild
      .save()
      .then((g) => console.log(`Nouveau serveur -> ${g.guildName}`));
  };

  client.getGuild = async (guild) => {
    const data = await Guild.findOne({ guildID: guild.id });
    if (data) return data;
    return client.config.DEFAULTSETTINGS;
  };

  client.updateGuild = async (guild, settings) => {
    let data = await client.getGuild(guild);
    if (typeof data !== "object") data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) {
        data[key] = settings[key];
      }
    }
    return data.updateOne(settings);
  };

  /*USER*/
  client.createUser = async (user) => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, user);
    const createUser = await new User(merged);

    createUser
      .save()
      .then((u) => console.log(`Nouvel utilisateur -> ${u.username}`))
      .catch((e) => {
        client.channels.cache
          .get("807661078666281070")
          .send(
            `${e} ***** Une erreur s'est produite. ${user.user.tag} est arrivé sur le serveur, mais n'a pas été ajouté à la base de donnée. Veuillez contacter le webmaster.`
          );
        console.log(e);
      });
  };

  client.getUser = async (user) => {
    const data = await User.findOne({ userID: user.id });
    if (data) return data;
    else return;
  };

  client.updateUser = async (user, settings) => {
    let data = await client.getUser(user);
    if (typeof data !== "object") data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) {
        data[key] = settings[key];
      }
    }
    return data.updateOne(settings);
  };

  client.deleteUser = (user) => {
    User.deleteOne({ userID: user.id })
      .then(() => {
        console.log(`${user.user.tag} à bien été supprimé`);
      })
      .catch((e) => {
        client.channels.cache
          .get("807661078666281070")
          .send(
            `${e} ***** Une erreur s'est produite. ${user.user.tag} a quitté le serveur, mais n'a pas été supprimé de la base de donnée. Veuillez contacter le webmaster.`
          );
        console.log(e);
      });
  };
};
