import express from "express";
import { connectToDatabase } from "./services/database.service";
import { userRouter } from "./routes/user.route";
import { requestRouter } from "./routes/request.route";
import { commentRouter } from "./routes/comment.route";
import { repliRouter } from "./routes/replie.route";

const app = express();
const port = 8080; 

connectToDatabase()
    .then(() => {
        app.use((req, res, next) => {
          res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
          res.setHeader("Access-Control-Allow-Origin", "*");
     
        

          next();
        });
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
