import express, { Request, Response } from "express";
// import { ObjectId } from "mongodb";
import { read } from "../CRUDE/actions";
import { Read } from "../models/CRUDE";
import { objRequest } from "../models/request";

export const requestRouter = express.Router();

requestRouter.use(express.json());

requestRouter.get("/", async (_req: Request, res: Response) => {
  const query: Read = { read: "many", field: { key: null }, index: 1 };

  try {
    const request = await read(query);
    res.status(200).send(request);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

requestRouter.get("/:id", async (req: Request, res: Response) => {
  const id = +req?.params?.id;
  const query: Read = { read: "one", field: { id }, index: 1 };

  try {
    const request = await read(query);
    res.status(200).send(request);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

requestRouter.post("/", async (req: Request, res: Response) => {
  const d = req.body;
  const newRequest = new objRequest(
    d.user_id,
    +d.id,
    d.title,
    d.category,
    +d.upvotes,
    d.status,
    d.description
  );
  console.log(newRequest);
  res.status(201).send(newRequest);
});
