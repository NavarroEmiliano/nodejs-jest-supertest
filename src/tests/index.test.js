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

describe('POST /tasks', () => {
  describe('fiven a title and description', () => {
    const newTask = {
      title: 'jest',
      description: 'test ID'
    };
    test('should respond with a 200 status code', async () => {
      const response = await request(app).post('/tasks').send(newTask);
      expect(response.statusCode).toBe(200);
    });

    test('should have a content-type: application/json in header', async () => {
      const response = await request(app).post('/tasks').send(newTask);
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json')
      );
    });

    test('should respond with an task ID', async () => {
      const response = await request(app).post('/tasks').send(newTask);
      expect(response.body.id).toBeDefined();
    });
  });

  describe('when title and description is missing', () => {
    test('should respond with a 400 status code', async () => {
      const response = await request(app).post('/tasks').send({});
      expect(response.statusCode).toBe(400);
    });
  });
});
