import { Request, Response, NextFunction } from 'express';

type expressFunction = (req: Request, res: Response, next: NextFunction) => {};

const asyncHandler =
  (fn: expressFunction) =>
  (req: Request, res: Response, next: NextFunction): Promise<void | {}> => {
    return Promise.resolve(fn(req, res, next)).catch(next);
  };

export default asyncHandler;
