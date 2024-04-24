import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";

export const requestRouter = express.Router();

requestRouter.use(express.json());

// requestRouter.get("/", async (_req: Request, res: Response) => {
//   try {
//     // Call find with an empty filter object, meaning it returns all documents in the collection. Saves as Game array to take advantage of types
//     const users = await collections.user?.find({}).toArray();
//     console.log(users);

//     res.status(200).send(users);
//   } catch (error: any) {
//     res.status(500).send(error.message);
//   }
// });
