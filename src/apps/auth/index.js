const authSchema = require("./schema");
const authController = require("./controller");
const handler = require("../../middleware/handler");
const { Router } = require("express");
const router = Router();

router
  .post("/register", handler(authController.register, authSchema.register()))
  .post("/login", handler(authController.login, authSchema.login()))
  .get("/me", handler(authController.me));

module.exports = router;
