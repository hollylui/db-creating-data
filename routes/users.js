const express = require("express");
const router = express.Router();
const UsersModel = require("../models/users/UsersModel");

// !Task 6 ------------------------------------

router.post("/add", async (req, res) => {
  const { body } = req;

  try {
    await UsersModel.create({ ...body });
  } catch (error) {
    return res.status(500).send("Data is invalid.");
  }
  return res.status(200).send("Data is added");
});

module.exports = router;
