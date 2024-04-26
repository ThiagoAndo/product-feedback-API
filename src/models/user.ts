import { ObjectId } from "mongodb";

export default interface User {
  _id?: ObjectId;
  image: string;
  name: string;
  username: string;
}

export const userSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["image", "name", "username"],
    additionalProperties: false,
    properties: {
      _id: {},
      image: {
        bsonType: "string",
        description: "'image' is required and is a string",
      },
      name: {
        bsonType: "string",
        description: "'name' is required and is a string",
      },
      username: {
        bsonType: "string",
        description: "'username' is required and is a string",
      },
    },
  },
};
