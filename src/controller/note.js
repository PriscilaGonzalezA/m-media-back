const {Note} = require("../models/note");
const {rmImage} = require("../utils/rmImages");


const getNotesAction = async (req, res) => {
    try {
        const notes = await Note.find({});
        return res.status(200).json(notes)
    } catch (e) {
        console.log("error",e)
        return res.status(500).json({"message": `Error: ${e}`})
    }
}

const getNoteAction = async (req, res) => {
    const { id } = req.params;
    try {
        const note = await Note.findById(id);
        if (!note) {
            return res.status(400).json({message: "Noticia no encontrada"})
        }
        return res.status(200).json(note)
    } catch (e) {
        console.log("error",e)
        return res.status(500).json({"message": `Error: ${e}`})
    }
}

const createNoteAction = async (req, res) => {
    const { body } = req;
    const file = req.file;
    if (file) body.image = file.path;
    else return res.status(400).json({"message": "No se subió una imagen"})
    try {
        const note = await Note.create(body);
        return res.status(201).json(note)
    } catch (e) {
        rmImage(body.image);
        return res.status(500).json({"message": `Error: ${e}`})
    }
}

const editNoteAction = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const file = req.file;
    if (file) body.image = file.path;

    try {
        const note = await Note.findOneAndUpdate({_id: id}, body);
        /* Borrar imagen anterior si estoy agregando una nueva */
        if (file) rmImage(note.image);
        return res.status(200).json({"message": "Editado exitosamente"})
    } catch (e) {
        if (file) rmImage(body.image);
        return res.status(500).json({"message": `Error: ${e}`})
    }
}

const deleteNoteAction = async (req, res) => {
    const { id } = req.params;
    try {
        const note = await Note.findByIdAndDelete(id);
        if (!note) {
            return res.status(400).json({message: "Noticia no encontrada"})
        }
        rmImage(note.image);
        return res.status(200).json({"message": "Noticia eliminado exitosamente"})
    } catch (e) {
        console.log("error",e)
        return res.status(500).json({"message": `Error: ${e}`})
    }
}

module.exports = {getNotesAction, getNoteAction, createNoteAction, editNoteAction, deleteNoteAction }