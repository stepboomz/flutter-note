"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabase = exports.connectToDatabase = void 0;
const mongodb_1 = require("mongodb");
let mongoDb;
async function connectToDatabase() {
    const url = 'mongodb://localhost:27017';
    const client = new mongodb_1.MongoClient(url);
    mongoDb = client.db("notedb");
    console.log("mongodb connected successfully");
}
exports.connectToDatabase = connectToDatabase;
function getDatabase() {
    return mongoDb;
}
exports.getDatabase = getDatabase;
