const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Projets = sequelize.define(
   "projets",
   {
      project_id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      project_title: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      project_category: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      project_timing: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      project_labels: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      project_responsive: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
      },
      project_thumbnail_path: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      project_video_path: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      project_description: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      creation_date: {
         type: DataTypes.DATE,
         allowNull: false,
      }
   },
   {
      tableName: "projets", // Nom de votre table
      timestamps: false,
   }
);

module.exports = Projets;


