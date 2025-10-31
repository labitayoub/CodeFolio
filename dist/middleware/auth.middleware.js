import jwt from 'jsonwebtoken';
export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const jwtSecret = process.env.JWT_SECRET;
    if (authHeader && jwtSecret) {
        const token = authHeader.split(' ')[1];
        if (token) {
            try {
                const payload = jwt.verify(token, jwtSecret);
                req.userId = payload?.userId;
            }
            catch (error) {
                // Invalid token - continue without userId
            }
        }
    }
    next();
};
//# sourceMappingURL=auth.middleware.js.map