import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined');
        }
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            req.userId = payload.userId;
        }
        catch (error) {
            // Invalid token
        }
    }
    next();
};
//# sourceMappingURL=auth.middleware.js.map