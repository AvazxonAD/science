require("colors");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Db } = require("./src/config/index");
const routes = require("./src/apps/index");
const responseMetods = require("./src/middleware/responseMetods");
const errorHandler = require("./src/middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use(responseMetods);

app.use(routes);

app.use(errorHandler);

async function start() {
  await Db.connectDB();

  app.listen(PORT, () => {
    console.log(`Server runing on : ${PORT}`.bgBlue);
  });
}

start();
