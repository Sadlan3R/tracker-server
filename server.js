const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let latestLocation = null;

app.post("/api/location", (req, res) => {
  latestLocation = req.body;

  console.log("New GPS:", latestLocation);

  res.json({ success: true });
});

app.get("/api/location", (req, res) => {
  res.json(latestLocation);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});