require('dotenv').config();
const request = require('supertest');
const server = require('../../api/server');
const db = require('../../database/dbConfig');

describe('DSRouter', () => {
  beforeEach(async () => {
    await db('users').truncate();
  })

  describe('GET /', () => {
    it('should return 200 OK', function () {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
