const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { promisify } = require("util");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({ error: "please provide email and password" });
  }

  const user = await User.findOne({ email });

  if (!user || password != user.password) {
    return res.status(404).json({ error: "Incorrect email or password" });
  }

  const token = jwt.sign({ id: user.id }, process.env.Secret_key, {
    expiresIn: "1h",
  });

  const cookieOptions = {
    expires: new Date(Date.now() + 1 * 60 * 60 * 1000),
    secure: false,
    httpOnly: true,
  };

  res.cookie("jwt", token, cookieOptions);

  res.json({
    message: token,
    status: "success",
  });
};

exports.isloggedin = async (req, res, next) => {
  let token = req.cookies.jwt;
  if (token) {
    const decode = await promisify(jwt.verify)(token, process.env.Secret_key);
    const currentUser = await User.findById(decode.id);
    if (!currentUser) {
      return next();
    }
    res.locals.user = currentUser;
    return next();
  }
  next();
};

exports.protect = async (req, res, next) => {
  try {
    let token = req.cookies.jwt;
    if (!token) {
      return res.json({ error: "you are not logged in" });
    }
    const decode = await promisify(jwt.verify)(token, process.env.Secret_key);
  } catch (err) {
    return res.json({ error: err.message });
  }
  next();
};
