const { Router } = require('express');
const { validateAppointmentMW } = require('./appointment.middleware');
const { processAppointmentController } = require('./appointment.controller');

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Appointments
 *     description: Operations related to managing appointments
 *
 * /appointments:
 *   post:
 *     summary: Processes an appointment by categorizing services and extracting customer details
 *     description: Takes appointment details such as name, category, customer name, and email, and processes them to return the services and customer information.
 *     tags:
 *       - Appointments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Service name
 *                 example: "service.service"
 *               category:
 *                 type: string
 *                 description: The category of the appointment, which determines available services.
 *                 example: "ac_AC"
 *               customerName:
 *                 type: string
 *                 description: The full name of the customer.
 *                 example: "John Doe"
 *               customerEmail:
 *                 type: string
 *                 description: The email of the customer.
 *                 example: "john.doe@example.com"
 *     responses:
 *       200:
 *         description: Successfully processed the appointment and returned customer and service details.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 services:
 *                   type: array
 *                   description: List of services available based on the category.
 *                   items:
 *                     type: string
 *                     example: "augen"
 *                 customer:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: First name of the customer.
 *                       example: "John"
 *                     lastName:
 *                       type: string
 *                       description: Last name of the customer.
 *                       example: "Doe"
 *                     email:
 *                       type: string
 *                       description: The email of the customer.
 *                       example: "john.doe@example.com"
 *                 title:
 *                   type: string
 *                   description: Full title combining first name and last name.
 *                   example: "John Doe"
 *       400:
 *         description: Bad request, missing or incorrect data.
 */
router.post('/', validateAppointmentMW, processAppointmentController);

module.exports = router;
