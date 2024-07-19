import { Request, Response, NextFunction } from 'express';

const API_KEY = 'hardcoded-api-key';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey === API_KEY) {
    next();
  } else {
    res.status(403).json({ message: 'Invalid API key' });
  }
};
