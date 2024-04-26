import { request } from "http";
import { ObjectId } from "mongodb";

export default interface Request {
  _id?: ObjectId;
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
}

export class objRequest {
  constructor(
    public id: number,
    public title: string,
    public category: string,
    public upvotes: number,
    public status: string,
    public description: string
  ) {}
}

export const requestSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["id", "title", "category", "upvotes", "status", "description"],
    additionalProperties: false,
    properties: {
      _id: {},

      id: {
        bsonType: "number",
        description: "'id' is required and is a number",
      },
      title: {
        bsonType: "string",
        description: "'title' is required and is a string",
      },
      category: {
        bsonType: "string",
        description: "'category' is required and is a string",
      },
      upvotes: {
        bsonType: "number",
        description: "'upvotes' is required and is a number",
      },
      status: {
        bsonType: "string",
        description: "'status' is required and is a string",
      },
      description: {
        bsonType: "string",
        description: "'description' is required and is a string",
      },
    },
  },
};
