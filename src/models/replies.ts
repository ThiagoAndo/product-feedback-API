import { ObjectId } from "mongodb";

export default interface Comment {
  _id?: ObjectId;
  content: string;
  replyingTo: string;
  username: string;
  comment_id: number;
}
export const commentSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["content", "replyingTo", "username", "comment_id"],
    additionalProperties: false,
    properties: {
      _id: {},
      content: {
        bsonType: "string",
        description: "'content' is required and is a string",
      },
      replyingTo: {
        bsonType: "string",
        description: "'replyingTo' is required and is a string",
      },
      username: {
        bsonType: "string",
        description: "'username' is required and is a string",
      },
      comment_id: {
        bsonType: "number",
        description: "'comment_id' is required and is a number",
      },
    },
  },
};
