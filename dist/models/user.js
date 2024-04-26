"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
exports.userSchema = {
    $jsonSchema: {
        bsonType: "object",
        required: ["id", "image", "name", "username"],
        additionalProperties: false,
        properties: {
            _id: {},
            id: {
                bsonType: "string",
                description: "'id' is required and is a string",
            },
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
