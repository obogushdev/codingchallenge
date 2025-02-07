require('dotenv').config();
const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const appointmentRoutes = require('./appointment/appointment.route');
const ROUTES = require('./common/routes.enum');

const app = express();
app.use(express.json());
app.use(ROUTES.APPOINTMENTS, appointmentRoutes);

// Swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'This is the API documentation for our Express app',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/**/*.route.js'],
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerOptions)));

module.exports = app;
