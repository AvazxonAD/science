const { Router } = require("express");
const newsController = require("./controller");
const handler = require("../../middleware/handler");
const router = Router();

router.get("/", handler(newsController.get));

module.exports = router;
