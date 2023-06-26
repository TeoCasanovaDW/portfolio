const sequelize = require("../config/db.config");
const ProjectsModel = require("../models/projects.model");

// GET ALL PROJECTS \\
module.exports.getAll = async (req, res) => {
   try {
      const infos = await ProjectsModel.findAll({
         order: [["creation_date", "DESC"]],
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

// GET PROJECT \\
module.exports.getProject = async (req, res) => {
   try {
      const project_id = req.params.id;

      const project = await ProjectsModel.findOne({
         where: { project_id: project_id },
      });
      console.log(project);
      res.status(200).send(project);
   } catch (err) {
      console.error(err);
      res.status(500).json({
         message: "Problème lors de la récupération du projet",
      });
   }
};
