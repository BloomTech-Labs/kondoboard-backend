require('dotenv').config();
const request = require('supertest');
const server = require('../../api/server');
const db = require('../../database/dbConfig');

const userData = {
  first_name: 'Spider',
  last_name: 'Man',
  email: 'peterparker@newyork.com',
  profile_image: '',
  user_track: 'DS',
  skills: JSON.stringify(['HTML','CSS','JavaScript','React,Node','Express']),
  states: JSON.stringify(['California','Colorado','Florida']),
  cities: JSON.stringify(['San Francisco', 'Denvor', 'Miami']),
  remote: true,
};

describe('Users router tests', () => {
  beforeAll(async () => {
    await db('users').truncate();
  });

  describe('GET /', () => {
    it('get non-exisiting user', async () => {
      const res = await request(server).get('/api/users');
      expect(res.status).toBe(404);
      expect(res.text).toBe('{"message":"There is no user with that email."}');
    });
  });

  describe('POST /', () => {
    it('adds a new user', async () => {
      const res = await request(server).post('/api/users').send(userData);
      const [user] = res.body;
      expect(res.status).toBe(201);
      expect(user.id).toBe(1);
      expect(user.email).toBe('peterparker@newyork.com');
    });

    it('add duplicate user email', async () => {
      const res = await request(server).post('/api/users').send(userData);
      expect(res.status).toBe(500);
    });
  });

  describe('GET /', () => {
    it('get existing user', async () => {
      const res = await request(server).get('/api/users');
      const user = res.body;
      expect(res.status).toBe(200);
      expect(user.id).toBe(1);
      expect(user.first_name).toBe('Spider');
      expect(user.email).toBe('peterparker@newyork.com');
    });
  });

  describe('GET /:user_id', () => {
    it('get existing user', async () => {
      const res = await request(server).get('/api/users/1');
      const user = res.body;
      expect(res.status).toBe(200);
      expect(user.id).toBe(1);
      expect(user.first_name).toBe('Spider');
      expect(user.email).toBe('peterparker@newyork.com');
    });

    it('get non-existing user', async() => {
      const res = await request(server).get('/api/users/2');
      expect(res.status).toBe(404);
      expect(res.text).toBe('{"message":"There is no user with that id."}');
    });
  });

  describe('PUT /:user_id', () => {
    it('edit existing user', async () => {
      const res = await request(server).put('/api/users/1').send({ first_name: 'Super' });
      const user = res.body;
      expect(res.status).toBe(201);
      expect(user.id).toBe(1);
      expect(user.first_name).toBe('Super');
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

const userTag = {
  user_id: 1,
  tag_name: 'ReactJS',
  color: '#4287f5',
  job_id: 'JS927927c0a7eb091796b82aea8f3a0770459567e4c662b9d727a428ccdeea092a',
};

describe('Users Tag router tests', () => {
  beforeAll(async () => {
    await db('user_tags').truncate();
  });

  describe('POST /:user_id/tag/', () => {
    it('adds a new tag', async () => {
      const res = await request(server).post('/api/users/1/tag/').send(userTag);
      const tag = res.body;
      expect(res.status).toBe(201);
      expect(tag.id).toBe(1);
      expect(tag.tag_name).toBe('ReactJS');
      expect(tag.color).toBe('#4287f5');
      expect(tag.job_id).toBe('JS927927c0a7eb091796b82aea8f3a0770459567e4c662b9d727a428ccdeea092a');
    });
  });

  // describe('PUT /tag/:tag_id', () => {
  //   it('edit existing tag', async () => {
  //     const res = await request(server).put('/api/users/tag/1').send({ tag_name: 'NodeJS' });
  //     const update = res.body;
  //     console.log(res.body);
  //     expect(res.status).toBe(201);
  //     expect(update.id).toBe(1);
  //     expect(update.tag_name).toBe('NodeJS');
  //   });
  // });

  describe('DELETE /tag/:tag_id', () => {
    it('delete existing tag', async () => {
      const res = await request(server).delete('/api/users/tag/1');
      expect(res.status).toBe(200);
      expect(res.text).toBe('{"message":"Tag deleted successfully"}');
    });
  });
});
