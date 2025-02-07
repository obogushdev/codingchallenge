const yup = require('yup');
const SERVICE_NAMES = require('../../common/service-names.enum');
const categoryMapping = require('../../common/category.map');

const appointmentSchema = yup
  .object()
  .shape({
    name: yup.string().oneOf(Object.values(SERVICE_NAMES)).required(),
    category: yup.string().oneOf(Object.keys(categoryMapping)).required(),
    customerName: yup
      .string()
      .matches(
        /^\s*\S+(?:\s+\S+){1}\s*$/,
        'customerName must consist of first name and last name',
      )
      .required(),
    customerEmail: yup.string().email().required(),
  })
  .noUnknown(true, 'The object contains unknown properties')
  .strict();

module.exports = appointmentSchema;
