const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/dbQueryHelper");

router.get("/", (req, res) => {
  userQueries
    .getPlayerByEmail()
    .then((player) => {
      res.status(200).json({ player });

    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
