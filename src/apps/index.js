const express = require("express");
const routes = express.Router();

const newsRoutes = require("./news/index");
const authRoutes = require("./auth/index");

routes.use("/news", newsRoutes);
routes.use("/auth", authRoutes);

module.exports = routes;
