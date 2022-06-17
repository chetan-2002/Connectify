const express = require("express");
const feedRoutes = require("./router/feed");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse application/json
app.use("/images", express.static(path.join(__dirname, "images")));

//cors error removal
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

mongoose
  .connect(
    "mongodb+srv://chetan_325:chetan_325@cluster0.aopmq.mongodb.net/messages?retryWrites=true&w=majority"
  )
  .then(
    console.log("Connected to database!"),
    app.listen(8080, () => {
      console.log("Connected to the server");
    })
  )
  .catch((err) => {
    console.log(err);
  });
// app.listen(8080, () => {
//   console.log("server is running on port 8080");
// });
