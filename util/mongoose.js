const mongoose = require("mongoose");
const { DBCONNECTION } = require("../config");

module.exports = {
  init: () => {
    mongoose
      .connect(DBCONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => console.log("Connexion à MongoDB réussie (Promesse)!"))
      .catch(() => console.log("Connexion à MongoDB échouée !"));

    mongoose.Promise = global.Promise;
    mongoose.connection.on("connected", () =>
      console.log("Connexion à MongoDB réussie (Event)!")
    );
  }
};
