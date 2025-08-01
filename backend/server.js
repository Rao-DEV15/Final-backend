const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/delete-image", async (req, res) => {
  const { public_id } = req.body;
  try {
    // Simulate cloudinary delete logic
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});