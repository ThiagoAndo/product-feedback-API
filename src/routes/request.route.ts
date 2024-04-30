import express, { Request, Response } from "express";
import { readDoc, createDoc, updateDoc } from "../CRUDE/actions";
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
  const query: Controler = { read: "one", field: { id }, index: 1 };

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
  const query: Insert = { index: 1 };

  const result = await createDoc(newR, query);

  result
    ? res
        .status(201)
        .send(
          `Successfully created a new product request id ${result.insertedId}`
        )
    : res.status(500).send("Failed to product request.");
});

requestRouter.put("/:id", async (req: Request, res: Response) => {
  const id = +req?.params?.id;
  const query: Controler = { read: null, field: { id }, index: 1 };

  try {
    const d = req.body;
    const updR = new objRequest(
      +d.id,
      d.title,
      d.category,
      +d.upvotes,
      d.status,
      d.description
    );
    // $set adds or updates all fields
    const result = await updateDoc(updR, query);

    result
      ? res.status(200).send(updR)
      : res.status(304).send(`Game with id: ${id} not updated`);
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});
