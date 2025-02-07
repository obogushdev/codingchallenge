const { Router } = require('express');
const { validateAppointmentMW } = require('./appointment.middleware');
const { processAppointmentController } = require('./appointment.controller');

const router = Router();

router.post('/', validateAppointmentMW, processAppointmentController);

module.exports = router;
