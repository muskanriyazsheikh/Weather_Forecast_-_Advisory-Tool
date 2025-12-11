const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const weatherRoutes = require("./routes/weatherRoutes");
app.use("/weather", weatherRoutes);

app.get("/", (req, res) => {
  res.send("Weather Advisory Backend Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
