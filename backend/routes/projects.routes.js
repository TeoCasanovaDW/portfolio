const router = require("express").Router();
const projectsController = require("../controllers/projects.controller");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

router.get("/getAll", projectsController.getAll);
router.get("/getProject/:id", projectsController.getProject);
router.get("/getLastProjects", projectsController.getLastProjects);

module.exports = router;
