const { validationResult } = require('express-validator');
const { rmImage } = require("../utils/rmImages");

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        /* Borrar la imagen subida si hay error */
        if (req.file) {
            rmImage(req.file.path)
        }
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

module.exports = validateRequest;