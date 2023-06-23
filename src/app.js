const express = require("express");
const app = express();
const movieRoutes = require("./routes/movieRoutes");
const actorRoutes = require("./routes/actorRoutes");
const producerRoutes = require("./routes/producerRoutes");
const db = require("./utils/db");

app.use(express.json());

app.use("/movies", movieRoutes);
app.use("/actors", actorRoutes);
app.use("/producers", producerRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
