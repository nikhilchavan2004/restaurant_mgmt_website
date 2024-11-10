class errorhandler extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}
export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "internal server error";
  err.code = err.code || 500;
  return res.status(err.code).json({
    success: false,
    message: err.message,
  });
};
export default errorhandler;
