const validationMiddleware = (validationSchema) => {
  return (req, res, next) => {
    const { error } = validationSchema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details);
    }
    next();
  };
};

module.exports = validationMiddleware;
