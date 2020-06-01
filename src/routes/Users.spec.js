const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

const userData = {
  first_name: 'Spider',
  last_name: 'Man',
  email: 'peterparker@newyork.com',
  profile_image: '',
  user_track: 'DS',
  skills: 'HTML,CSS,JavaScript,React,Node,Express',
  locations: 'New York,London,Los Angeles',
  remote: true,
};

describe('Users router tests', () => {
  beforeAll(async () => {
    await db('users').truncate();
  });

  describe('POST /', () => {
    it('adds a new user', async () => {
      const res = await request(server).post('/api/users').send(userData);
      expect(res.status).toBe(201);
      expect(res.body.id).toBe(1);
      expect(res.body.email).toBe('peterparker@newyork.com');
    });

    it('add duplicate user email', async () => {
      const res = await request(server).post('/api/users').send(userData);
      expect(res.status).toBe(500);
      expect(res.text).toBe('{"error":"Server Error"}');
    });
  });

  describe('GET /', () => {
    it('get existing user', async () => {
      const res = await request(server).get('/api/users').send({ email: 'peterparker@newyork.com' });
      expect(res.status).toBe(200);
      expect(res.body.id).toBe(1);
      expect(res.body.first_name).toBe('Spider');
      expect(res.body.email).toBe('peterparker@newyork.com');
    });

    it('get non-exisiting user', async () => {
      const res = await request(server).get('/api/users').send({ email: 'batman@thebatcave.com' });
      expect(res.status).toBe(404);
      expect(res.text).toBe('{"message":"There is no user with that email."}');
    });
  });

  describe('GET /:user_id', () => {
    it('get existing user', async () => {
      const res = await request(server).get('/api/users/1');
      expect(res.status).toBe(200);
      expect(res.body.id).toBe(1);
      expect(res.body.first_name).toBe('Spider');
      expect(res.body.email).toBe('peterparker@newyork.com');
    });

    it('get non-existing user', async() => {
      const res = await request(server).get('/api/users/2');
      expect(res.status).toBe(404);
      expect(res.text).toBe('{"message":"There is no user with that id."}');
    });
  });

  describe('PUT /:user_id', () => {
    it('edit existing user', async () => {
      const res = await request(server).put('/api/users/1').send({ first_name: 'Super', email: 'superman@krypton.com' });
      expect(res.status).toBe(201);
      expect(res.body.id).toBe(1);
      expect(res.body.first_name).toBe('Super');
      expect(res.body.email).toBe('superman@krypton.com');
    });

    it('edit non-existing user', async () => {
      const res = await request(server).put('/api/users/2').send({ first_name: 'new name' });
      expect(res.status).toBe(404);
      expect(res.text).toBe('{"message":"Invalid request"}');
    });
  });

  describe('DELETE /:user_id', () => {
    it('delete existing user', async () => {
      const res = await request(server).delete('/api/users/1');
      expect(res.status).toBe(200);
      expect(res.text).toBe('{"message":"User deleted successfully"}');
    });

    it('delete non-existing user', async () => {
      const res = await request(server).delete('/api/users/1');
      expect(res.status).toBe(404);
      expect(res.text).toBe('{"message":"User not found"}');
    });
  });
});
