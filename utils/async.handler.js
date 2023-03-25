module.exports = async_handler = (callback) => {
  return async (req, res, next) => {
    try {
      await callback(req, res, next);
    } catch (error) {
      return next(error);
    }
  };
};
