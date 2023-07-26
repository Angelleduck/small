const User = require("./../models/userModel");

exports.Overview = async (req, res) => {
  const users = await User.find();

  res.status(200).render("base", {
    users,
  });
};

exports.loginForm = (req, res) => {
  res.status(200).render("login", {
    title: "log into your account",
  });
};
