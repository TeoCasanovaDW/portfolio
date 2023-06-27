const sequelize = require("../config/db.config");
const RecommandationsModel = require("../models/recommandations.model");

// GET ALL RECOMMANDATIONS \\
module.exports.getAll = async (req, res) => {
   try {
      const infos = await RecommandationsModel.findAll();
      console.log(infos);
      res.status(200).send(infos);
   } catch (err) {
      console.error(err);
      res.status(500).json({
         message: "Problème lors de la récupération des recommandations",
      });
   }
};

// CREATE RECOMMANDATION \\
module.exports.create = async (req, res) => {
   try {
      const { reco_author_firstname, reco_author_lastname, reco_description, reco_date } =
         req.body;
      const newReco = await RecommandationsModel.create({
         reco_author_firstname: reco_author_firstname,
         reco_author_lastname: reco_author_lastname,
         reco_description: reco_description,
         reco_date: Date.now()
      });
      res.status(201).json({ newReco });
   } catch (err) {
      console.error(err);
      res.status(500).json({
         message: "Problème lors de la création de la recommandation",
      });
   }
};
