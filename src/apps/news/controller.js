const newsService = require("./service");

async function create(req, res) {
  let image = "";

  if (req.file) {
    image = `${process.env.BASE_URL}/uploads/images/${req.file.filename}`;
  }

  const result = await newsService.create({ ...req.body, image });

  return res.success("News created successfully", 201, result);
}

async function getAll(req, res) {
  const result = await newsService.getAll();

  return res.success("News list fetched", 200, result);
}

async function getById(req, res) {
  const result = await newsService.getById({ id: +req.params.id });

  return res.success("News item found", 200, result);
}

async function update(req, res) {
  let image = "";

  if (req.file) {
    image = `${process.env.BASE_URL}/uploads/images/${req.file.filename}`;
  }

  const result = await newsService.update({ ...req.body, image, id: req.params.id });

  return res.success("News item updated", 200, result);
}

async function remove(req, res) {
  const result = await newsService.remove({ id: +req.params.id });

  return res.success("News item deleted", 200, result);
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
