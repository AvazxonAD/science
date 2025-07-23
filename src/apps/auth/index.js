const authSchema = require("./schema");
const authController = require("./controller");
const handler = require("../../middleware/handler");
const protect = require("../../middleware/protect");
const { Router } = require("express");
const router = Router();

router
  .post("/register", handler(authController.register, authSchema.register()))
  .post("/login", handler(authController.login, authSchema.login()))
  .get("/users", protect, handler(authController.getUsers))
  .get("/me", protect, handler(authController.me));

module.exports = router;
