const logError = (error, genericErrorMessage) => {
  if (process.env.NODE_ENV !== "test") {
    console.error({
      error,
      message: error.message || genericErrorMessage
    });
  }
};
const errorHandler = ({
  genericErrorMessage = "An error has occured"
} = {}) => {
  return (error, req, res, next) => {
    logError(error, genericErrorMessage);
    if (error.status) {
      return res.status(error.status).json({
        type: error.name,
        message: error.message,
        errors: error.errors
      });
    } else {
      return res.status(500).json({ message: genericErrorMessage });
    }
  };
};
module.exports = errorHandler;
