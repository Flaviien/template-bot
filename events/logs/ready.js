module.exports = (client) => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setPresence({
    activity: { name: "!help pour plus d'infos", type: "PLAYING" },
    status: "online"
  });
};
