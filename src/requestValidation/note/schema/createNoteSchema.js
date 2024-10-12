const { body } = require('express-validator');

module.exports.createNoteSchema = {
    title: body('title')
        .exists()
        .withMessage("El título es requerido")
        .notEmpty()
        .withMessage("El título no puede ser vacío"),
    description: body('description')
        .exists()
        .withMessage("La descripción es requerida")
        .notEmpty()
        .withMessage("La descripción no puede ser vacía"),
    url: body("url")
        .exists()
        .withMessage("La url del video es requerida")
        .notEmpty()
        .withMessage("La url del video no puede ser vacía"),
    author: body('author')
        .exists()
        .withMessage("El nombre del autor es requerido")
        .notEmpty()
        .withMessage("El nombre del autor no puede ser vacío"),
}