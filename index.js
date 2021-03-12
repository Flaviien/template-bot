const Discord = require("discord.js");
const { loadCommands, loadEvents } = require("./util/loader");

const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"]
}); // L'objet avec la clé "partials" est la pour autorisé le client à se servir des partials. Elle servent à récuperer le cache même si on relance le bot
require("./util/functions")(client);
client.config = require("./config");
client.mongoose = require("./util/mongoose");
client.commands = new Discord.Collection();

loadCommands(client);
loadEvents(client);
client.mongoose.init();

client.login(client.config.TOKEN);
