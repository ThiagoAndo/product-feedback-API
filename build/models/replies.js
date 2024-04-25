"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repliSchema = void 0;
exports.repliSchema = {
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
