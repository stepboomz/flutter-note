"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
const mongodb_client_1 = require("../config/mongodb_client");
const mongodb_1 = require("mongodb");
class NoteController {
    static async addNote(request, response) {
        let db = (0, mongodb_client_1.getDatabase)();
        let notesCollection = db.collection("notes");
        const note = request.body;
        note.createAt = Date.now();
        const data = await notesCollection.insertOne(note);
        response.status(200).json({
            "status": "success",
            "response": data,
        });
    }
    static async getMyNotes(request, response) {
        let db = (0, mongodb_client_1.getDatabase)();
        let notesCollection = db.collection("notes");
        const uid = request.query.uid;
        const data = await notesCollection.find({ creatorId: uid }).toArray();
        response.status(200).json({
            "status": "success",
            "response": data
        });
    }
    static async updateNote(request, response) {
        let db = (0, mongodb_client_1.getDatabase)();
        let notesCollection = db.collection("notes");
        const note = request.body;
        const updateNoteObject = {
            title: note.title,
            description: note.description,
            createAt: note.createAt
        };
        const data = await notesCollection.updateOne({ _id: new mongodb_1.ObjectId(note.noteId) }, { $set: updateNoteObject });
        response.status(200).json({
            "status": "success",
            "response": data,
        });
    }
    static async deleteNote(request, response) {
        let db = (0, mongodb_client_1.getDatabase)();
        let notesCollection = db.collection("notes");
        const note = request.body;
        const data = await notesCollection.deleteOne({ _id: new mongodb_1.ObjectId(note.noteId) });
        response.status(200).json({
            "status": "success",
            "response": data,
        });
    }
}
exports.NoteController = NoteController;
