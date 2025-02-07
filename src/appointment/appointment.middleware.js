const appointmentSchema = require('./schemas/appointment.schema');

const validateAppointmentMW = (req, res, next) => {
  try {
    appointmentSchema.validateSync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
};

module.exports = { validateAppointmentMW };
