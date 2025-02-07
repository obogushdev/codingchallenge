const { processAppointment } = require('./appointment.model');

exports.processAppointmentController = (req, res) => {
  const { category, customerName, customerEmail } = req.body;
  const processedAppointment = processAppointment({
    category,
    customerName,
    customerEmail,
  });
  res.json(processedAppointment);
};
