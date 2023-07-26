const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("../app");

dotenv.config({ path: "../.env" });
const DB = process.env.DATABASE.replace("<password>", process.env.PASSWORD);
mongoose
  .connect(DB)
  .then((con) => {
    console.log("connection done");
  })
  .catch((err) => console);
app.listen(8000);
