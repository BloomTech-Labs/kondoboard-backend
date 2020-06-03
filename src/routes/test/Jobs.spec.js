require('dotenv').config();
const request = require('supertest');
const server = require('../../api/server');
const db = require('../../database/dbConfig');

const jobData = {
  ds_id: "A1549335999",
  source_url: "[application url]",
  title: "Data Engineer",
  company: "capital_one",
  description: "... innovate leveraging ...",
  date_published: "2020-05-19",
  location_city: "Illinois Medical District",
  location_state: "Illinois",
  geo_locat: "41.868494,-87.673975"
};

describe('Jobs router tests', () => {
  beforeAll(async () => {
    await db('jobs').truncate();
  });

  describe('POST /', () => {
    it('adds a new jobs', async () => {
      const res = await request(server).post('/api/jobs').send(jobData);
      expect(res.status).toBe(201);
      expect(res.body[0].id).toBe(1);
      expect(res.body[0].title).toBe('Data Engineer');
    });

    it('add duplicate ds_id', async () => {
      const res = await request(server).post('/api/jobs').send(jobData);
      expect(res.status).toBe(500);
    });
  });

  describe('GET /:job_id', () => {
    it('get existing job', async () => {
      const res = await request(server).get('/api/jobs/1');
      expect(res.status).toBe(201);
      expect(res.body[0].id).toBe(1);
      expect(res.body[0].title).toBe('Data Engineer');
      expect(res.body[0].ds_id).toBe('A1549335999');
    });

    it('get non-existing job', async() => {
      const res = await request(server).get('/api/jobs/50');
      expect(res.status).toBe(400);
      expect(res.text).toBe('{"message":"Unable to get job"}');
    });
  });

  describe('PUT /:job_id', () => {
    it('edit existing job', async () => {
      const res = await request(server).put('/api/jobs/1').send({ title: 'Web Developer', company: "visa" });
      expect(res.status).toBe(201);
      expect(res.body[0].id).toBe(1);
      expect(res.body[0].title).toBe('Web Developer');
      expect(res.body[0].company).toBe('visa');
    });

    it('edit non-existing job', async () => {
      const res = await request(server).put('/api/jobs/2').send({ title: 'UX Designer' });
      expect(res.status).toBe(400);
      expect(res.text).toBe('{"message":"Invalid request"}');
    });
  });
});