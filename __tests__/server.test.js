const request = require('supertest');
const app = require('../server');

describe('Test Demo App Endpoints', () => {
  // Test the welcome endpoint
  it('GET / should return welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from the Test Demo App!');
  });

  // Test the health endpoint
  it('GET /health should return healthy status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'healthy' });
  });

  // Test the add endpoint with valid numbers
  it('GET /add/2/3 should return sum 5', async () => {
    const res = await request(app).get('/add/2/3');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ result: 5 });
  });

  // Test the add endpoint with invalid input
  it('GET /add/a/b should return 400 error', async () => {
    const res = await request(app).get('/add/a/b');
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ error: 'Invalid numbers provided' });
  });
});
