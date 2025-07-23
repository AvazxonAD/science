require("colors");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Db } = require("./config/index");
const routes = require("./apps/index");
const responseMetods = require("./middleware/responseMetods");
const errorHandler = require("./middleware/errorHandler");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
console.log(path.join(__dirname, "../", "public"));
app.use(express.static(path.join(__dirname, "../", "public")));

app.use(responseMetods);

app.use(routes);

app.use(async (req, res) => {
  return res.error("Route not found", 404);
});

app.use(errorHandler);

async function start() {
  await Db.connectDB();

  app.listen(PORT, () => {
    console.log(`Server runing on : ${PORT}`.bgBlue);
  });
}

start();
