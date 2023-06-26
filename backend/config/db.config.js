// DB CONNECTION \\

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
   "portfolio",
   process.env.DB_USER,
   process.env.DB_USER_PASS,
   {
      host: process.env.DB_HOST,
      dialect: "mysql",
   }
);

sequelize
   .authenticate()
   .then(() => {
      console.log("Connexion réussie.");
   })
   .catch((err) => {
      console.error("Impossible de se connecter à la base de données :", err);
   });
module.exports = sequelize;
