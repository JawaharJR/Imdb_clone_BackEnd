const express = require("express");
const router = express.Router();
const producerController = require("../controllers/producerController");

router.get("/", producerController.getAllProducers);
router.post("/", producerController.createProducer);

module.exports = router;
