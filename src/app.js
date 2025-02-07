require('dotenv').config();
const express = require('express');
const appointmentRoutes = require('./appointment/appointment.route');
const ROUTES = require('./common/routes.enum');

const app = express();
app.use(express.json());
app.use(ROUTES.APPOINTMENTS, appointmentRoutes);

module.exports = app;
