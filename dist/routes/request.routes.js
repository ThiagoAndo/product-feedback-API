"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestRouter = void 0;
const express_1 = __importDefault(require("express"));
const database_service_1 = require("../services/database.service");
exports.requestRouter = express_1.default.Router();
exports.requestRouter.use(express_1.default.json());
exports.requestRouter.get("/", async (_req, res) => {
    try {
        const users = await database_service_1.collections[1].find({}).toArray();
        res.status(200).send(users);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
