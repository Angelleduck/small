const express = require("express");
const User = require("./../controller/user");
const auth = require("./../controller/login");

const Router = express.Router();

Router.route("/").get(auth.protect, User.getAllUser).post(User.createUser);

Router.route("/:id").get(auth.protect, User.getUser).patch(User.updateUser);
module.exports = Router;
// auth.protect,
