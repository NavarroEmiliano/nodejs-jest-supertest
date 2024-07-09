/* eslint-disable no-undef */
import request from 'supertest';
import app from '../app.js';

describe('GET /tasks', () => {
  test('should respond with a 200 status', async () => {
    const response = await request(app).get('/tasks').send();
    expect(response.statusCode).toBe(200);
  });

  test('should respond with an array', async () => {
    const response = await request(app).get('/tasks').send();
    expect(response.body).toBeInstanceOf(Array);
  });
});
