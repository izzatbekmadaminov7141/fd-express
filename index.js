const express = require("express");
// const Joi = require("joi");
const app = express();
const home = require("./routers/home");
// const config = require("config");
// app.use(express.json());
app.set("view engine", "pug");

app.use("/", home);
const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) {
    console.log("Error listening");
  }
  console.log(port, "postni eshitishni boshladim...");
});
