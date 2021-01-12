export const globalErrorHandler = (err, req, res, next) => {
  console.log(err)
  if (err.code) {
    return res.status(err.code).json(err);
  }

  if (!err.code) {
    return res.status(500).json({
      code: 500,
      type: 'ServerErrror',
      name: 'ServerErrrorEception',
      message: err.message
    });
  }

  next();
};

/**
 * Returns a not found 404 json response
 *
 * @param {Request} req
 * @param {Response} res
 * @param next
 */
export const notFoundError = (req, res, next) => {
  res.status(404);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error);
};
