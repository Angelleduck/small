const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json({
      message: "success",
    });
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    // query

    const queryobj = { ...req.query };
    const excluded = ["sort", "field"];
    excluded.forEach((el) => delete queryobj[el]);

    const user = await User.find(queryobj);

    res.status(200).json(user);
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.json({
      user,
    });
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      user,
    });
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};
