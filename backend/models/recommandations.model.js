const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Recommandations = sequelize.define(
   "recommandations",
   {
      reco_id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      reco_author_firstname: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      reco_author_lastname: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      reco_description: {
         type: DataTypes.STRING,
         allowNull: false,
      }
   },
   {
      tableName: "recommandations", // Nom de votre table
      timestamps: false,
   }
);

module.exports = Recommandations;


