import express, { Request, Response } from "express";
// import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import { readDocument } from "../CRUDE/actions";
import { Read } from "../models/CRUDE";

export const requestRouter = express.Router();

requestRouter.use(express.json());

requestRouter.get("/", async (_req: Request, res: Response) => {
  const query: Read = { read: "many", field: { key: null }, index: 1 };

  try {
    const request = await readDocument(query);
    res.status(200).send(request);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

requestRouter.get("/:id", async (req: Request, res: Response) => {
  const id = + req?.params?.id;
  const query: Read = { read: "one", field: {id}, index: 1 };

  try {
    const request = await readDocument(query);
    res.status(200).send(request);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
