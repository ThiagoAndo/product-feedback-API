import express from "express";
import { connectToDatabase } from "./services/database.service";
import { userRouter } from "./routes/products.router";
import { requestRouter } from "./routes/request.routes";

const app = express();
const port = 8080; 

connectToDatabase()
    .then(() => {
        app.use("/user", userRouter);
        app.use("/request", requestRouter);
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
