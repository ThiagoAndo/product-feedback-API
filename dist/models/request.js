"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestSchema = void 0;
exports.requestSchema = {
    $jsonSchema: {
        bsonType: "object",
        required: [
            "user_id",
            "id",
            "title",
            "category",
            "upvotes",
            "status",
            "description",
        ],
        additionalProperties: false,
        properties: {
            _id: {},
            user_id: {
                bsonType: "string",
                description: "'user_id' is required and is a string",
            },
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
