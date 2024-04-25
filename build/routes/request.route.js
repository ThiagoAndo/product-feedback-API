"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestRouter = void 0;
const express_1 = __importDefault(require("express"));
const actions_1 = require("../CRUDE/actions");
exports.requestRouter = express_1.default.Router();
exports.requestRouter.use(express_1.default.json());
exports.requestRouter.get("/", async (_req, res) => {
    const query = { read: "many", field: { key: null }, index: 1 };
    try {
        const request = await (0, actions_1.readDocument)(query);
        res.status(200).send(request);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.requestRouter.get("/:id", async (req, res) => {
    var _a;
    const id = +((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
    const query = { read: "one", field: { id }, index: 1 };
    try {
        const request = await (0, actions_1.readDocument)(query);
        res.status(200).send(request);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
