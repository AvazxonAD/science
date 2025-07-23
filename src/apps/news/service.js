const newsDB = require("./db");
const ErrorResponse = require("../../utils/errorResponse");

// CREATE
async function create(data) {
  const result = await newsDB.createNews([data.title, data.description, data.image, data.category_name]);

  return result;
}

// GET ALL
async function getAll() {
  const result = await newsDB.getAllNews();
  return result;
}

// GET BY ID
async function getById(data) {
  const result = await newsDB.getNewsById([data.id]);

  if (!result) {
    throw new ErrorResponse("News item not found", 404);
  }

  return result;
}

// UPDATE
async function update(data) {
  const existing = await newsDB.getNewsById([data.id]);

  if (!existing) {
    throw new ErrorResponse("News item not found", 404);
  }

  const result = await newsDB.updateNews([data.id, data.title, data.description, data.image, data.category_name]);

  return result;
}

// DELETE
async function remove(data) {
  const existing = await newsDB.getNewsById([data.id]);

  if (!existing) {
    throw new ErrorResponse("News item not found", 404);
  }

  const result = await newsDB.deleteNews([data.id]);

  return result;
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
