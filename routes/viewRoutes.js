const express = require("express");
const Viewing = require("../controller/viewController");
const auth = require("../controller/login");

const router = express.Router();

router.use(auth.isloggedin);

router.get("/", Viewing.Overview);
router.get("/login", Viewing.loginForm);

module.exports = router;
