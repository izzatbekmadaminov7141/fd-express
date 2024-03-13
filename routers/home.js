const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.render("index", {
    title: "pug orqalik qildik",
    greeting: "SALOM MEN DASTURCHIMAN",
  });
});

module.exports = router;
