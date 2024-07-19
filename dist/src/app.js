"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("./middleware/auth");
const stationRoutes_1 = __importDefault(require("./routes/stationRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(auth_1.authMiddleware);
app.use('/stations', stationRoutes_1.default);
exports.default = app;
