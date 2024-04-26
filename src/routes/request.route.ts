import express, { Request, Response } from "express";
import { readDoc, createDoc } from "../CRUDE/actions";
import { Controler, type Insert } from "../models/CRUDE";
import { objRequest } from "../models/request";

export const requestRouter = express.Router();

requestRouter.use(express.json());

requestRouter.get("/", async (_req: Request, res: Response) => {
  const query: Controler = { read: "many", field: { key: null }, index: 1 };

  try {
    const request = await readDoc(query);
    res.status(200).send(request);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

requestRouter.get("/:id", async (req: Request, res: Response) => {
  const id = +req?.params?.id;
  const query: Controler = { read: "one", field: { id }, index: 5 };

  try {
    const request = await readDoc(query);
    res.status(200).send(request);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

requestRouter.post("/", async (req: Request, res: Response) => {
  const d = req.body;
  const newR = new objRequest(
    +d.id,
    d.title,
    d.category,
    +d.upvotes,
    d.status,
    d.description
  );
  const action: Insert = { index: 1 };

  const result = await createDoc(newR, action);

  result
    ? res
        .status(201)
        .send(
          `Successfully created a new product request id ${result.insertedId}`
        )
    : res.status(500).send("Failed to product request.");
});
