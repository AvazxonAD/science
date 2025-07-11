const newsService = require("./service");

async function get(req, res) {
  const data = await newsService.get();

  return res.success("getSuccess", 200, data);
}

module.exports = {
  get,
};
