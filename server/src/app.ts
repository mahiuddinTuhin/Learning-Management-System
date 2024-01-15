import cookieParser from "cookie-parser";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import globalErrorHandler from "./app/middleware/Error/globalErrorHandler";

const app = express();

/* body parser */
app.use(express.json());

/* cookie parser */
app.use(cookieParser());

/* cors */
app.use(cors());

/* testing api */

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server api is working.",
  });
});

/* unknow error routes */
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} is not found!`) as any;
  err.statusCode = 404;
  next(err);
});

app.use(globalErrorHandler);

export default app;
