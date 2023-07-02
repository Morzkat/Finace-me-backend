import { NextFunction } from 'express';

const errorHandler = (
  //Create a type for Error
  error: { message: string; errorCode: number },
  request: any,
  response: any,
  next: NextFunction
) => {
  // Error handling middleware functionality
  const status = error.errorCode || 400;
  const errorResponse = error.message ? { message: error.message } : error;

  // // send back an easily understandable error message to the caller
  response.status(status).send({ errors: errorResponse });
};

export default errorHandler;
