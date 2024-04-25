import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";

export const requestRouter = express.Router();

requestRouter.use(express.json());

requestRouter.get("/", async (_req: Request, res: Response) => {
  try {
    const users = await collections[1].find({}).toArray();
    res.status(200).send(users);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});