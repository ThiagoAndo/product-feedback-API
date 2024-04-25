import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import User from "../models/user";
import { userSchema } from "../models/user";
import Request from "../models/request";
import { requestSchema } from "../models/request";

interface schemas {
  coll: string;
  schema: object;
}

export const collections: [
  user?: mongoDB.Collection<User>,
  request?: mongoDB.Collection<Request>
] = [];

export async function connectToDatabase() {
  // Pulls in the .env file so it can be accessed from process.env. No path as .env is in root, the default location
  dotenv.config();

  // Create a new MongoDB client with the connection string from .env
  const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
  const checkSchema: schemas []= [
    { coll: process.env.COLLECTION_NAME_U, schema: userSchema },
    { coll: process.env.COLLECTION_NAME_PR, schema: requestSchema },
  ];
  // Connect to the cluster
  await client.connect();

  // Connect to the database with the name specified in .env
  const db = client.db(process.env.DB_NAME);

  // Apply schema validation to the collection

  checkSchema.forEach(async (schema) => {
    await applySchemaValidation(db, schema);
  });

  // Connect to the collection with the specific name from .env, found in the database previously specified
  const userCollection = db.collection<User>(process.env.COLLECTION_NAME_U);
  const requestCollection = db.collection<Request>(
    process.env.COLLECTION_NAME_PR
  );

  // Persist the connection to the Games collection
  collections[0] = userCollection;
  collections[1] = requestCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${requestCollection.collectionName}`
  );
}

async function applySchemaValidation(db: mongoDB.Db, schema: schemas) {
  // Try applying the modification to the collection, if the collection doesn't exist, create it
  await db
    .command({
      collMod: schema.coll,
      validator: schema.schema,
    })
    .catch(async (error: mongoDB.MongoServerError) => {
      if (error.codeName === "NamespaceNotFound") {
        await db.createCollection(schema.coll, {
          validator: schema.schema,
        });
      }
    });
}
