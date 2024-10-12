const {createNoteSchema} = require("./schema/createNoteSchema");
const {editNoteSchema} = require("./schema/editNoteSchema");


module.exports.createNoteRequestValidations = [
    ...Object.keys(createNoteSchema).map((key) => createNoteSchema[key]),
];

module.exports.updateNoteRequestValidations = [
    ...Object.keys(editNoteSchema).map((key) => editNoteSchema[key]),
]