const JoiBase = require("joi");

module.exports = JoiBase.defaults((schema) => {
  return schema.options({ stripUnknown: true, abortEarly: false, allowUnknown: false, convert: true });
});
