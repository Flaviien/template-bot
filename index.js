const Discord = require("discord.js");
const { loadCommands, loadEvents } = require("./util/loader");

let intents = new Discord.Intents(Discord.Intents.NON_PRIVILEGED);
intents.add("GUILD_MEMBERS");

const client = new Discord.Client({
  ws: { intents: intents },
  partials: ["MESSAGE", "CHANNEL", "REACTION"]
});
// La clé "partials" est là pour autoriser le client à se servir des partials. Elle servent à récuperer le cache même si on relance le bot
// La clé "ws" est là pour configurer le client discord. Pour le moment il me sert uniquement à pouvoir récuperer les "guilds.members.fetch()". Il faut penser également à allé activer les "intents", dans le panel "discord.com/developers".

require("./util/functions")(client);
client.config = require("./config");
client.mongoose = require("./util/mongoose");
client.commands = new Discord.Collection();

loadCommands(client);
loadEvents(client);
client.mongoose.init();

client.login(client.config.TOKEN);
