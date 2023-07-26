const express = require("express");

const log = require("./../controller/login");

const Router = express.Router();

Router.route("/login").post(log.login);

module.exports = Router;
