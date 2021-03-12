module.exports = {
  TOKEN: process.env.TOKEN,
  DBCONNECTION: process.env.DBCONNECTION,
  DEFAULTSETTINGS: {
    prefix: process.env.DEFAULT_PREFIX,
    logChannel: process.env.LOG_CHANNEL,
    welcomeMessage: process.env.WELCOME_MESSAGE
  }
};
