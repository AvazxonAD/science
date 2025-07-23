const newsSchema = require("./schema");
const newsController = require("./controller");
const handler = require("../../middleware/handler");
const protect = require("../../middleware/protect");
const { Router } = require("express");
const { uploadImage } = require("../../utils/upload");

const router = Router();

router
  .post("/", protect, uploadImage.single("file"), handler(newsController.create, newsSchema.create()))
  .get("/", protect, handler(newsController.getAll))
  .get("/:id", protect, handler(newsController.getById, newsSchema.getById()))
  .put("/:id", protect, uploadImage.single("file"), handler(newsController.update, newsSchema.update()))
  .delete("/:id", protect, handler(newsController.remove, newsSchema.remove()));

module.exports = router;
