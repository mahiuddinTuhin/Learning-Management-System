import { NextFunction, Request, Response } from "express";

const catchAsync =
  (thisFunc: any) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(thisFunc(req, res, next)).catch(next);
  };

export default catchAsync;
