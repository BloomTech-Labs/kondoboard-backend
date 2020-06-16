require('dotenv').config();
const request = require('supertest');
const server = require('./server.js');

describe('server', () => {
  it('should run tests', () => {
    expect(true).toBe(true);
  });

  describe('GET /', () => {
    it('should return 200 ok', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    });

    it('should return JSON', async () => {
      const res = await request(server).get('/');
      expect(res.type).toMatch(/json/i);
    });
  });
});

describe('server', () => {
  describe('GET /api', () => {
    it('should return 200', async () => {
      const res = await request(server).get('/api');
      expect(res.status).toBe(200);
    });

    it('should return JSON', async () => {
      const res = await request(server).get('/api');
      expect(res.type).toMatch(/json/i);
    });
  });
});
