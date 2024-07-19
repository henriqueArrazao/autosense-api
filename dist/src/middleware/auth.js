"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const API_KEY = 'hardcoded-api-key';
const authMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey === API_KEY) {
        next();
    }
    else {
        res.status(403).json({ message: 'Invalid API key' });
    }
};
exports.authMiddleware = authMiddleware;
