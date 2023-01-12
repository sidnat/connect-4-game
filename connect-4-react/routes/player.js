const { request } = require("express");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("users");
});

router.get("/1", (req, res) => {
  res.render("user_profile");
});

router.get("/login/:id", (req, res) => {
  req.session.user_id = req.params.id;

  return res.redirect("/");
});

router.post("/login", (req, res) => {
  req.session.user_id = req.body.email;

  return res.redirect("/");
});

module.exports = router;
