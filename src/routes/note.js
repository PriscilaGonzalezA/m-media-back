const express = require('express');
const { Note} = require("../models/note");
const mongoose = require("mongoose");
const router = express.Router();
const upload = require('../middleware/uploadFile');

/**
 * @swagger
 * tags:
 *   name: Noticias
 *   description: Operaciones relacionadas con las noticias
 */

/**
 * @swagger
 * /api/note:
 *   get:
 *     tags: [Noticias]
 *     security:
 *      - bearerAuth: []
 *     summary: Obtener noticias.
 *     description: Retorna una lista de todas las noticias.
 *     responses:
 *       '200':
 *         description: OK. Retorna la lista de noticias.
 *       '500':
 *         description: Error interno del servidor.
 */
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find({});
        return res.status(200).json(notes)
    } catch (e) {
        console.log("error",e)
        return res.status(500).json({"message": `Error: ${e}`})
    }
});

/**
 * @swagger
 * /api/note/{id}:
 *   get:
 *     tags: [Noticias]
 *     security:
 *      - bearerAuth: []
 *     summary: Obtiene una noticia por su ID.
 *     description: Retorna una noticia basado en su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la noticia a obtener.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK. Retorna la noticia.
 *       '400':
 *         description: No se encontró la noticia con el ID especificado.
 *       '500':
 *         description: Error interno del servidor.
 */
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const note = await Note.findById(id);
        return res.status(200).json(note)
    } catch (e) {
        console.log("error",e)
        return res.status(500).json({"message": `Error: ${e}`})
    }
});

/**
 * @swagger
 * /api/note:
 *   post:
 *     tags: [Noticias]
 *     security:
 *      - bearerAuth: []
 *     summary: Crear noticia.
 *     description: Crea una nueva noticia en el sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *            $ref: '#/components/schemas/NoteRequest'
 *     responses:
 *       '200':
 *         description: Creado exitosamente.
 *       '400':
 *         description: Error en la solicitud debido a datos faltantes o incorrectos.
 *       '500':
 *         description: Error interno del servidor.
 */
router.post('/', upload.single('image'), async (req, res) => {
    const { body } = req;
    const file = req.file;
    if (file) body.image = file.path;
    else return res.status(400).json({"message": "No se subió una imagen"})
    try {
        const note = await Note.create(body);
        return res.status(201).json(note)
    } catch (e) {
        return res.status(500).json({"message": `Error: ${e}`})
    }

});

/**
 * @swagger
 * /api/note/{id}:
 *   put:
 *    tags: [Noticias]
 *    security:
 *      - bearerAuth: []
 *    summary: Actualiza una noticia.
 *    description: Actualiza una noticia existente en el sistema.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: ID de la noticia a actualizar.
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            $ref: '#/components/schemas/NoteRequest'
 *    responses:
 *      '200':
 *        description: Editado exitosamente.
 *      '400':
 *        description: Error en la solicitud debido a datos faltantes o incorrectos.
 *      '500':
 *        description: Error interno del servidor.
 */
router.put('/:id', upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const file = req.file;
    if (file) body.image = file.path;

    try {
        const note = await Note.findOneAndUpdate({_id: id}, body);
        return res.status(200).json(note)
    } catch (e) {
        return res.status(500).json({"message": `Error: ${e}`})
    }
});

/**
 * @swagger
 * /api/note/{id}:
 *   delete:
 *    tags: [Noticias]
 *    security:
 *      - bearerAuth: []
 *    summary: Elimina una noticia.
 *    description: Elimina una noticia existente en el sistema.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: ID de la noticia a eliminar.
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: Noticia eliminado exitosamente.
 *      '400':
 *        description: No se encontró la noticia con el ID especificado.
 *      '500':
 *        description: Error interno del servidor.
 */
router.delete('/:id',async (req, res) => {
    const { id } = req.params;
    try {
        await Note.findByIdAndDelete(id);
        return res.status(200).json({"message": "Noticia eliminado exitosamente"})
    } catch (e) {
        console.log("error",e)
        return res.status(500).json({"message": `Error: ${e}`})
    }
});

/**
 * @swagger
 * components:
 *  schemas:
 *    NoteRequest:
 *      type: object
 *      properties:
 *       title:
 *         type: string
 *       description:
 *         type: string
 *       image:
 *         type: string
 *         format: binary
 *       url:
 *         type: string
 *       author:
 *         type: string
 */

module.exports = router;