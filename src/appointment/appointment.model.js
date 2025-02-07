const categoryMapping = require('../common/category.map');

/**
 *
 * @param {categoryMapping} category
 * @param customerName
 * @param customerEmail
 * @returns {{services: (*|*[]), title: string, customer: {lastName: any, name: *, email}}}
 */
exports.processAppointment = ({ category, customerName, customerEmail }) => {
  const services = categoryMapping[category] || [];
  const nameParts = customerName.split(' ');
  const lastName = nameParts.pop();
  const firstName = nameParts.join(' ');

  return {
    services,
    customer: {
      name: firstName,
      lastName,
      email: customerEmail,
    },
    title: `${firstName} ${lastName}`,
  };
};
