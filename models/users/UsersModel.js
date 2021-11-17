// ! Task 7 & 8 ---------------------------------------

const mongoose = require("mongoose");

const usersPattern = {
  id: String,
  firstname: String,
  lastname: String,
  language: String,
  avatar: String,
  skill: String,
};

const UsersSchema = new mongoose.Schema(usersPattern);

const Users = mongoose.model("users", UsersSchema);

module.exports = Users;
