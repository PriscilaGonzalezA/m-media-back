const mongoose = require('mongoose');
const seedData = require('./data');
const {Note} = require("../models/note");
require('dotenv').config();

const seedDatabase = async () => {
    try {
        console.log('Conectado a la base de datos');
        await mongoose.connect(
            `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`
        );
        await Note.deleteMany({});
        console.log('Eliminando datos...')
        await Note.insertMany(seedData);
        console.log('Datos insertados correctamente')
    } catch (e) {
        console.error('Error insertando los datos:', e);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();