import express, { Request, Response } from "express";
// import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";

export const userRouter = express.Router();

userRouter.use(express.json());

// userRouter.get("/", async (_req: Request, res: Response) => {
//   try {
//     const users = await collections[0].find({}).toArray();
//     res.status(200).send(users);
//   } catch (error: any) {
//     res.status(500).send(error.message);
//   }
// });


userRouter.get("/:userName", async (req: Request, res: Response) => {
  const userName = req?.params?.userName;

  try {
    // _id in MongoDB is an objectID type so we need to find our specific document by querying
    const query = { username: userName };
    const user = await collections[0].findOne(query);

    if (user) {
      res.status(200).send(user);
    } else {
      res
        .status(404)
        .send(
          `Unable to find matching document with user name: ${req.params.userName}`
        );
    }
  } catch (error) {
    res.status(500).send(error?.message);
  }
});

// gamesRouter.post("/", async (req: Request, res: Response) => {
//     try {
//         const newGame: Game = req.body;
//         const result = await collections.games.insertOne(newGame);

//         result
//             ? res.status(201).send(`Successfully created a new game with id ${result.insertedId}`)
//             : res.status(500).send("Failed to create a new game.");
//     } catch (error) {
//         console.error(error);
//         res.status(400).send(error.message);
//     }
// });

// gamesRouter.put("/:id", async (req: Request, res: Response) => {
//     const id = req?.params?.id;

//     try {
//         const updatedGame = req.body;
//         const query = { _id: new ObjectId(id) };
//         // $set adds or updates all fields
//         const result = await collections.games.updateOne(query, { $set: updatedGame });

//         result
//             ? res.status(200).send(`Successfully updated game with id ${id}`)
//             : res.status(304).send(`Game with id: ${id} not updated`);
//     } catch (error) {
//         console.error(error.message);
//         res.status(400).send(error.message);
//     }
// });

// gamesRouter.delete("/:id", async (req: Request, res: Response) => {
//     const id = req?.params?.id;

//     try {
//         const query = { _id: new ObjectId(id) };
//         const result = await collections.games.deleteOne(query);

//         if (result && result.deletedCount) {
//             res.status(202).send(`Successfully removed game with id ${id}`);
//         } else if (!result) {
//             res.status(400).send(`Failed to remove game with id ${id}`);
//         } else if (!result.deletedCount) {
//             res.status(404).send(`Game with id ${id} does not exist`);
//         }
//     } catch (error) {
//         console.error(error.message);
//         res.status(400).send(error.message);
//     }
// });
