import express from "express";
import { connectToDatabase } from "./services/database.service";
import { userRouter } from "./routes/user.route";
import { requestRouter } from "./routes/request.route";
import { commentRouter } from "./routes/comment.route";
import { repliRouter } from "./routes/replie.route";

const app = express();
const port = 3000; 

connectToDatabase()
    .then(() => {
        app.use("/user", userRouter);
        app.use("/request", requestRouter);
        app.use("/comment", commentRouter);
        app.use("/repli", repliRouter);
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
