const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/quizapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
