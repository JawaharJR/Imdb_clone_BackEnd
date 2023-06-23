const Producer = require("../models/producer");

const getAllProducers = async (req, res) => {
  try {
    const producers = await Producer.find();
    res.json(producers);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching producers." });
  }
};

const createProducer = async (req, res) => {
  try {
    const { name, gender, dob, bio } = req.body;
    const producer = new Producer({ name, gender, dob, bio });
    const savedProducer = await producer.save();
    res.json(savedProducer);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the producer." });
  }
};

module.exports = {
  getAllProducers,
  createProducer,
};
