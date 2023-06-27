const router = require("express").Router();
const recommandationsController = require("../controllers/recommandations.controller");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

router.get("/getAll", recommandationsController.getAll);
router.post("/create", jsonParser, recommandationsController.create);

module.exports = router;
