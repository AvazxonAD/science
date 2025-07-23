const Joi = require("../../utils/joi");

function create() {
  return Joi.object({
    body: Joi.object({
      title: Joi.string().required().min(3),
      description: Joi.string().allow(null, ""),
      category_name: Joi.string()
        .valid(
          "Medical News",
          "Clinical Guidelines",
          "Research Update",
          "Pharmaceutical",
          "Diseases",
          "Treatment Methods",
          "Surgical News",
          "Med Technology",
          "Diagnostics",
          "Prevention",
          "Health Policy",
          "Medical Education",
          "Medical Ethics",
          "New Drugs",
          "Emergency Updates"
        )
        .required()
        .min(3),
    }),
  });
}

function update() {
  return Joi.object({
    params: Joi.object({
      id: Joi.number().required(),
    }),
    body: Joi.object({
      title: Joi.string().required().min(3),
      description: Joi.string().allow(null, ""),
      category_name: Joi.string()
        .valid(
          "Medical News",
          "Clinical Guidelines",
          "Research Update",
          "Pharmaceutical",
          "Diseases",
          "Treatment Methods",
          "Surgical News",
          "Med Technology",
          "Diagnostics",
          "Prevention",
          "Health Policy",
          "Medical Education",
          "Medical Ethics",
          "New Drugs",
          "Emergency Updates"
        )
        .required()
        .min(3),
    }),
  });
}

function getById() {
  return Joi.object({
    params: Joi.object({
      id: Joi.number().required(),
    }),
  });
}

function remove() {
  return Joi.object({
    params: Joi.object({
      id: Joi.number().required(),
    }),
  });
}

module.exports = {
  create,
  update,
  getById,
  remove,
};
