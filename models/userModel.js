const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "name is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  age: {
    type: Number,
    required: [true, "age is required"],
  },
  gender: {
    type: String,
    required: [true, "gender is required"],
  },
  imageCover: {
    type: String,
    required: [true, "imagee is required"],
  },
  place: {
    type: String,
    required: [true, "place is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
});

const User = mongoose.model("User", schema);

module.exports = User;
