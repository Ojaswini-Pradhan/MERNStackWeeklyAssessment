const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Express server!" });
});

app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
