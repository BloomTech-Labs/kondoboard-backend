require('dotenv').config();
const request = require('supertest');
const server = require('../../api/server');
const db = require('../../database/dbConfig');

// const userData = {
//   first_name: 'Iron',
//   last_name: 'Guy',
//   email: 'ironguy@gmail.com',
//   profile_image: '',
//   user_track: 'DS',
//   skills: JSON.stringify(['HTML','CSS','JavaScript','React,Node','Express']),
//   locations: JSON.stringify(['New York','London','Los Angeles']),
//   remote: true,
// };

// POST URL: api/jobs/:user_id/save_job
// const userFaveJobs = {
//   job: {
//     ds_id: 'A1549335999',
//     source_url: '[application url]',
//     title: 'Data Engineer',
//     company: 'capital_one',
//     description: '... innovate leveraging ...',
//     date_published: '2020-05-19',
//     location_city: 'Illinois Medical District',
//     location_state: 'Illinois',
//     geo_locat: '41.868494,-87.673975',
//   },
//   status: 'favorite',
// };

// POST URL: api/jobs/:user_id/save_job
// const userIrrelevantJob = {
//   job: {
//     ds_id: 'A1549335666',
//     source_url: '[application url]',
//     title: 'Data Engineer',
//     company: 'chase',
//     description: '... work for a boss all day ...',
//     date_published: '2020-05-31',
//     location_city: 'Illinois Medical District',
//     location_state: 'Illinois',
//     geo_locat: '41.868494,-87.673975',
//   },
//   status: 'irrelevant',
// };

describe('Users router tests', () => {
  beforeAll(async () => {
    await db('users').truncate();
  });

  describe('Testing test', () => {
    it('get non-exisiting user', async () => {
      const res = await request(server).get('/api/users');
      expect(res.status).toBe(404);
    });
  });

  //  describe('POST /', () => {
  //    it('adds a new user', async () => {
  //      const res = await request(server).post('/api/users').send(userData);
  //      expect(res.status).toBe(201);
  //      expect(res.body[0].id).toBe(1);
  //      expect(res.body[0].email).toBe('ironguy@gmail.com');
  //    })
  // });

  // describe('Add favorite Job', () => {
  // 	it('adds favorite job to user', async () => {
  // 		const res = await request(server).post('api/jobs/1/save_job').send(userIrrelevantJob);
  // 		expect(res.status).toBe(201);
  // 	})
  // });

});

