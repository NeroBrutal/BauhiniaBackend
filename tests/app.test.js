const request = require('supertest');
const { app, server } = require('../src/index');

describe('Bauhinia Backend API', () => {
  afterAll((done) => {
    server.close(done);
  });

  describe('GET /', () => {
    it('should return welcome message', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Welcome to Bauhinia Backend API');
      expect(response.body).toHaveProperty('version');
      expect(response.body).toHaveProperty('status', 'running');
    });
  });

  describe('GET /health', () => {
    it('should return health status', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status', 'healthy');
      expect(response.body).toHaveProperty('timestamp');
    });
  });

  describe('GET /nonexistent', () => {
    it('should return 404 for non-existent routes', async () => {
      const response = await request(app).get('/nonexistent');
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('error', 'Not Found');
    });
  });
});
