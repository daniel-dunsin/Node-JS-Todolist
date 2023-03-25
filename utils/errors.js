class CustomError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

const notFound = (req, res, next) => {
  return res.status(404).send("Resource not found!");
};

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.code).send({ err: err.message });
  }
  return res.status(500).send({ err: "An internal server error occured!!" });
};

module.exports = {
  CustomError,
  notFound,
  errorHandler,
};
