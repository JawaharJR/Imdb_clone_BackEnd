const Movie = require("../models/movie");

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find().populate("actors producer");
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching movies." });
  }
};

const createMovie = async (req, res) => {
  try {
    const { name, yearOfRelease, producer, actors } = req.body;
    const movie = new Movie({ name, yearOfRelease, producer, actors });
    const savedMovie = await movie.save();
    res.json(savedMovie);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the movie." });
  }
};

module.exports = {
  getAllMovies,
  createMovie,
};
