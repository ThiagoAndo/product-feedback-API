"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readDocument = void 0;
const database_service_1 = require("../services/database.service");
async function readDocument(action) {
    let data;
    try {
        if (action.read === "many") {
            data = await database_service_1.collections[action.index].find({}).toArray();
        }
        else {
            data = await database_service_1.collections[action.index].findOne(action.field);
        }
        return data;
    }
    catch (error) {
        console.log(error.message);
    }
    return;
}
exports.readDocument = readDocument;
