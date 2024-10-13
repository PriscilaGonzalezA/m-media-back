const express = require('express');
const swaggerUi = require('swagger-ui-express');
const { swaggerOptions } = require("./middleware/swagger");
const mongoose = require('mongoose');
const noteRouter = require('./routes/note');
const cors = require('cors');

const app = express()
const port = process.env.PORT || 8000;

//Cors
app.use(cors({
    origin: `${process.env.FRONT_URL}`,
    credentials: true
}));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Routes
app.use("/api/note", noteRouter);

/**
 * Swagger
 */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));


/**
 * Mongoose
 */
(async () => {
    await mongoose.connect(
        `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`
    );
})();

// Para ver las imagenes subidas
app.use('/uploads', express.static('uploads'));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})