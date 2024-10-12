const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: String,
    description: String,
    image: String,
    url: String,
    author: String,
});

exports.Note = mongoose.model("Note", NoteSchema);