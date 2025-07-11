const express = require("express");
const routes = express.Router();

const newsRoutes = require("./news/index");

routes.use("/news", newsRoutes);

module.exports = routes;
