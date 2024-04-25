import { ObjectId } from "mongodb";

export default interface Comment {
  _id?: ObjectId;
  productRequests_id: number;
  username: string;
  id: number;
  content: string;
}

export const commentSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["productRequests_id", "username", "id", "content"],
    additionalProperties: false,
    properties: {
      _id: {},
      productRequests_id: {
        bsonType: "number",
        description: "'productRequests_id' is required and is a number",
      },
      username: {
        bsonType: "string",
        description: "'username' is required and is a string",
      },
      id: {
        bsonType: "number",
        description: "'id' is required and is a number",
      },
      content: {
        bsonType: "string",
        description: "'content' is required and is a string",
      },
    },
  },
};
