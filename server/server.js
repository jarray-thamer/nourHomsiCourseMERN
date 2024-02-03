//  CREATE SERVER
const express = require("express");
const app = express();

// CONNECT TO DATABASE
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://thamer99jarray:rPigfexD5sfsQLOX@cluster0.qqrcain.mongodb.net/mernNourHomsiCourse"
);

// IMPORT USER MODEL
const UserModel = require("./models/user.model");

const PORT = 3001;

app.get("/users", async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
});

app.listen(PORT, () => {
  console.log("Server Works on PORT:", PORT);
});
