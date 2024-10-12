const { body, param } = require('express-validator');
const {Note} = require("../../../models/note");

module.exports.editNoteSchema = {
    id: param('id')
        .exists()
        .withMessage("El id es requerido")
        .custom(async (value) => {
            const note = await Note.findById(value);
            if (!note) {
                return Promise.reject("Noticia no encontrada");
            }
            return value;
        }),
    title: body('title')
        .optional(),
    description: body('description')
        .optional(),
    url: body("url")
        .optional(),
    author: body('author')
        .optional(),
}