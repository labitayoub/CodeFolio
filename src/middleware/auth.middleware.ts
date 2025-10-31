import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const jwtSecret = process.env.JWT_SECRET;

  if (authHeader && jwtSecret) {
    const token = authHeader.split(' ')[1];

    if (token) {
      try {
        const payload = jwt.verify(token, jwtSecret) as any;
        (req as any).userId = payload?.userId;
      } catch (error) {
        // Invalid token - continue without userId
      }
    }
  }

  next();
};