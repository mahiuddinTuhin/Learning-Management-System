import { NextFunction, Request, Response } from "express";

import ErrorHandler from "../../../utils/ErrorHandler";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error!";

  if (err?.name === "CastError") {
    //! wrong mongodb id
    const message = `Resource not found. Invalid: ${err?.path || ""}`;
    err = new ErrorHandler(400, message);
  } else if (err?.code === 11000) {
    //! duplicate found
    const message = `Duplicate ${Object.keys(err?.keyValue) || ""} entered`;
    err = new ErrorHandler(400, message);
  } else if (err?.name === "JsonWebTokenError") {
    //! jwt error
    const message = `Authorization failed.`;
    err = new ErrorHandler(400, message);
  } else if (err?.name === "TokenExpiredError") {
    //! jwt token expired
    const message = `Authorization failed.`;
    err = new ErrorHandler(400, message);
  }

  res.status(err?.statusCode).json({
    success: false,
    messaage: err?.message,
  });
};

export default globalErrorHandler;
