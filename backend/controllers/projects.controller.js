const sequelize = require("../config/db.config");
const ProjectsModel = require("../models/projects.model");

// GET HEADER INFOS \\
module.exports.getAll = async (req, res) => {
   try {
      const infos = await ProjectsModel.findAll({
            order: [['creation_date', 'DESC']]
         });
      console.log(infos);
      res.status(200).send(infos);
   } catch (err) {
      console.error(err);
      res.status(500).json({
         message: "Problème lors de la récupération des projets",
      });
   }
};