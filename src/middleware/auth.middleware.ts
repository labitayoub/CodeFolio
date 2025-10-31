import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader && process.env.JWT_SECRET) {
    const token = authHeader.split(' ')[1];

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET) as any;
      (req as any).userId = payload?.userId;
    } catch (error) {
      // Invalid token - continue without userId
    }
  }

  next();
};