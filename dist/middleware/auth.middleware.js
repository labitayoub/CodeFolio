import jwt from 'jsonwebtoken';
export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        if (!process.env.JWT_SECRET) {
            return next();
        }
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            req.userId = payload?.userId;
        }
        catch (error) {
            // Invalid token - continue without userId
        }
    }
    next();
};
//# sourceMappingURL=auth.middleware.js.map