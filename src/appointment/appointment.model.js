const categoryMapping = require('../common/category.map');

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
