"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_service_1 = require("./services/database.service");
const user_router_1 = require("./routes/user.router");
const request_routes_1 = require("./routes/request.routes");
const app = (0, express_1.default)();
const port = 8080;
(0, database_service_1.connectToDatabase)()
    .then(() => {
    app.use("/user", user_router_1.userRouter);
    app.use("/request", request_routes_1.requestRouter);
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
