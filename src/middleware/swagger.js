const swaggerJSDoc = require('swagger-jsdoc');

exports.swaggerOptions = swaggerJSDoc({
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Mega Media API',
            version: '1.0.0',
            description: 'This is the API for Mega Media',
            contact: {
                name: 'Priscila González',
                email: 'pris.18p@gmail.com',
            },
        },
        components: {
            /*securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },*/
        },
    },
    apis: ['./src/routes/*.js'],
});
