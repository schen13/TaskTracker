const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch( err => console.log(err))

app.get("/", (req, res) => res.send("Hello World"));


app.listen(port, () => console.log(`Server is running on ${port}`));
