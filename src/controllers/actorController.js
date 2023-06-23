const Actor = require("../models/actor");

const getAllActors = async (req, res) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching actors." });
  }
};

const createActor = async (req, res) => {
  try {
    const { name, gender, dob, bio } = req.body;
    const actor = new Actor({ name, gender, dob, bio });
    const savedActor = await actor.save();
    res.json(savedActor);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the actor." });
  }
};

module.exports = {
  getAllActors,
  createActor,
};
