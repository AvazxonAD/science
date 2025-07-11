const errorHandler = (err, req, res, next) => {
  console.error("---------------- GLOBAL ERROR HANDLER ----------------".red);
  console.error(err.stack.red);

  const message = err.message || "Internal Server Error";
  const code = err.statusCode || 500;

  return res.error(message, code);
};

module.exports = errorHandler;
