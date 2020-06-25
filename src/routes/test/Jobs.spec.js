require('dotenv').config();
const request = require('supertest');
const server = require('../../api/server');
const db = require('../../database/dbConfig');

const jobData = {
  ds_id: 'A1549335999',
  source_url: '[application url]',
  title: 'Data Engineer',
  company: 'capital_one',
  description: '... innovate leveraging ...',
  date_published: '2020-05-19',
  location_city: 'Illinois Medical District',
  location_state: 'Illinois',
  geo_locat: '41.868494,-87.673975',
};

describe('Jobs router tests', () => {
  beforeAll(async () => {
    await db('jobs').truncate();
  });

  describe('POST /', () => {
    it('adds a new jobs', async () => {
      const res = await request(server).post('/api/jobs').send(jobData);
      const [job] = res.body;
      expect(res.status).toBe(201);
      expect(job.id).toBe(1);
      expect(job.title).toBe('Data Engineer');
    });

    it('add duplicate ds_id', async () => {
      const res = await request(server).post('/api/jobs').send(jobData);
      expect(res.status).toBe(500);
    });
  });

  describe('GET /:job_id', () => {
    it('get existing job', async () => {
      const res = await request(server).get('/api/jobs/1');
      const [job] = res.body;
      expect(res.status).toBe(201);
      expect(job.id).toBe(1);
      expect(job.title).toBe('Data Engineer');
      expect(job.ds_id).toBe('A1549335999');
    });

    it('get non-existing job', async() => {
      const res = await request(server).get('/api/jobs/50');
      expect(res.status).toBe(400);
      expect(res.text).toBe('{"message":"Unable to get job"}');
    });
  });
});

const columnData = {
  name: 'Jobs offers',
  location: '5',
};

describe('Columns router tests', () => {
  beforeAll(async () => {
    await db('columns').truncate();
  });

  describe('POST /:user_id/column', () => {
    it('adds a new column', async () => {
      const res = await request(server).post('/api/jobs/1/column').send(columnData);
      const newColumn = res.body;
      console.log(newColumn);
      expect(res.status).toBe(200);
      expect(res.text).toBe('{"message":"Column has been added"}');
    });
  });

  describe('GET /:user_id/column', () => {
    it('get existing column', async () => {
      const res = await request(server).get('/api/jobs/1/column');
      const column = res.body;
      expect(res.status).toBe(200);
      expect(column[0].id).toBe(1);
      expect(column[0].name).toBe('Jobs offers');
      expect(column[0].location).toBe(5);
    });

    describe('PUT /column/:column_id', () => {
      it('edit existing column', async () => {
        const res = await request(server).put('/api/jobs/column/1').send({ name: 'Reject offers', location: 6 });
        expect(res.status).toBe(200);
        expect(res.text).toBe('{"message":"Updated column"}');
      });
    });
  });

  describe('DELETE /column/:column_id', () => {
    it('edit existing column', async () => {
      const res = await request(server).delete('/api/jobs/column/1');
      // console.log(res);
      expect(res.status).toBe(200);
      expect(res.text).toBe('{"message":"Column deleted"}');
    });
  });
});

const userJobId = {
  users_jobs_id: 1,
  columns_id: 1,
};

describe('Add job to Columns router tests', () => {
  beforeAll(async () => {
    await db('job_column').truncate();
  });

  describe('POST /column', () => {
    it('adds a new job to column', async () => {
      const res = await request(server).post('/api/jobs/column').send(userJobId);
      expect(res.status).toBe(200);
    });
  });

  describe('PUT /column/update/job', () => {
    it('change column', async () => {
      const res = await request(server).put('/api/jobs/column/update/job').send({ users_jobs_id: 1, columns_id: 2 });
      expect(res.status).toBe(200);
    });
  });
});
