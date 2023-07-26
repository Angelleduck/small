const express = require("express");
const cookieParser = require("cookie-parser");
const router = require("./routes/userRouter");
const logRouter = require("./routes/loginRoutes");
const viewRouter = require("./routes/viewRoutes");
const compression = require("compression");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(compression());

app.use("/", viewRouter);
app.use("/api/v2/", router);
app.use("/api/v2/", logRouter);

module.exports = app;
