const express = require("express");
const router = express.Router();
const actorController = require("../controllers/actorController");

router.get("/", actorController.getAllActors);
router.post("/", actorController.createActor);

module.exports = router;
