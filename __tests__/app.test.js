const request = require('supertest');
const app = require('../src/app');
const ROUTES = require('../src/common/routes.enum');

describe('POST /appointments', () => {
  it('should return 200 and transform the data correctly', async () => {
    const response = await request(app).post(ROUTES.APPOINTMENTS).send({
      name: 'service.service',
      category: 'ac_AC',
      customerName: 'John Doe',
      customerEmail: 'john.doe@example.com',
    });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      services: ['augen'],
      customer: {
        name: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
      },
      title: 'John Doe',
    });
  });

  it('should return 400 for missing fields', async () => {
    const response = await request(app).post(ROUTES.APPOINTMENTS).send({
      category: 'ac_AC',
      customerEmail: 'john.doe@example.com',
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });

  it('should return 400 for invalid category', async () => {
    const response = await request(app).post(ROUTES.APPOINTMENTS).send({
      name: 'service.service',
      category: 'invalid_category',
      customerName: 'John Doe',
      customerEmail: 'john.doe@example.com',
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });

  it('should return 400 for invalid email format', async () => {
    const response = await request(app).post(ROUTES.APPOINTMENTS).send({
      name: 'service.service',
      category: 'ac_AC',
      customerName: 'John Doe',
      customerEmail: 'invalid-email',
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });
});
