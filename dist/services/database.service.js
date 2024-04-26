"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = exports.collections = void 0;
const mongoDB = __importStar(require("mongodb"));
const dotenv = __importStar(require("dotenv"));
const user_1 = require("../models/user");
const request_1 = require("../models/request");
exports.collections = [];
async function connectToDatabase() {
    // Pulls in the .env file so it can be accessed from process.env. No path as .env is in root, the default location
    dotenv.config();
    // Create a new MongoDB client with the connection string from .env
    const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
    const checkSchema = [
        { coll: process.env.COLLECTION_NAME_U, schema: user_1.userSchema },
        { coll: process.env.COLLECTION_NAME_PR, schema: request_1.requestSchema },
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
    const userCollection = db.collection(process.env.COLLECTION_NAME_U);
    const requestCollection = db.collection(process.env.COLLECTION_NAME_PR);
    // Persist the connection to the Games collection
    exports.collections[0] = userCollection;
    exports.collections[1] = requestCollection;
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${requestCollection.collectionName}`);
}
exports.connectToDatabase = connectToDatabase;
async function applySchemaValidation(db, schema) {
    // Try applying the modification to the collection, if the collection doesn't exist, create it
    await db
        .command({
        collMod: schema.coll,
        validator: schema.schema,
    })
        .catch(async (error) => {
        if (error.codeName === "NamespaceNotFound") {
            await db.createCollection(schema.coll, {
                validator: schema.schema,
            });
        }
    });
}
