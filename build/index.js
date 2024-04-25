"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_service_1 = require("./services/database.service");
const user_route_1 = require("./routes/user.route");
const request_route_1 = require("./routes/request.route");
const comment_route_1 = require("./routes/comment.route");
const replie_route_1 = require("./routes/replie.route");
const app = (0, express_1.default)();
const port = 3000;
(0, database_service_1.connectToDatabase)()
    .then(() => {
    app.use("/user", user_route_1.userRouter);
    app.use("/request", request_route_1.requestRouter);
    app.use("/comment", comment_route_1.commentRouter);
    app.use("/repli", replie_route_1.repliRouter);
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
