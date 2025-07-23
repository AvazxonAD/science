const { db } = require("../../config/index");

// CREATE
async function createNews(params) {
  const query = `
    INSERT INTO news (title, description, image, category_name, pub_date, created_at, updated_at)
    VALUES ($1, $2, $3, $4, now(), now(), now())
    RETURNING *;
  `;
  const result = await db.query(query, params);
  return result[0];
}

// READ ALL
async function getAllNews() {
  const query = `
    SELECT
      *,
      TO_CHAR(pub_date, 'YYYY-MM-DD') AS pub_date
    FROM news WHERE is_active = true ORDER BY created_at DESC;
  `;
  const result = await db.query(query);
  return result;
}

// READ BY ID
async function getNewsById(params) {
  const query = `
    SELECT
      *,
      TO_CHAR(pub_date, 'YYYY-MM-DD') AS pub_date
    FROM news WHERE id = $1 AND is_active = true;
  `;
  const result = await db.query(query, params);
  return result[0];
}

// UPDATE
async function updateNews(params) {
  const query = `
    UPDATE news
    SET title = $2,
        description = $3,
        image = $4,
        category_name = $5,
        pub_date = now(),
        updated_at = now()
    WHERE id = $1 AND is_active = true
    RETURNING *;
  `;
  const result = await db.query(query, params);
  return result[0];
}

// DELETE (soft delete)
async function deleteNews(params) {
  const query = `
    UPDATE news
    SET is_active = false,
        updated_at = now()
    WHERE id = $1
    RETURNING *;
  `;
  const result = await db.query(query, params);
  return result[0];
}

module.exports = {
  createNews,
  getAllNews,
  getNewsById,
  updateNews,
  deleteNews,
};
