const express = require("express");

const router = express.Router();

const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

router.route("/").get((req, res) => {
  res.send('hey');
});

module.exports = router;