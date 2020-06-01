require('dotenv').config();
const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

describe('POST /', function () {
  beforeEach(async () => {
      await db('jobs').truncate();
  });

  it('500 on missing data', function () {
    return request(server)
      .post('/api/jobs')
      .send({ 
        ds_id: "A1521288337",
        source_url: "https://www.adzuna.com/land/ad/1521288337?se=wGHBDnif6hGCPf0B37M_Tg&utm_medium=api&utm_source=da871bdc&v=3850D5181972D3577432AB845ACE7A684586D6DB",
        description: "perform ...",
        date_published: "2020-04-14",
        locations: "Newark"  
      })
      .then(res => {
        expect(res.status).toBe(500);
      });
  });

  it('404 on fail to pose', function() {
    return request(server)
      .post('/api')
      .send({
        ds_id: "A1550124138",
        source_url: "https://www.adzuna.com/land/ad/1550124138?se=wGHBDnif6hGCPf0B37M_Tg&utm_medium=api&utm_source=da871bdc&v=F9032DFA855E78FC254649635160B40FEC3E207E",
        title: "fahejfhaebfaljbfljeflahefabdcfalbfajbdfabdelablfjbabfajdbfaljdbfaljebfafasdbflasdbfaldbfafabflajbefalfbalsdfcalsdbfalsdbfalebflabflabfladbfaldbflsdbflasbflasbflsabfalsbfcecjdbfjaeflewbjfabe dflbaeljbdflabflabsfabflbfahbflabflasbflasdbfaebflebfalbfbafbfadbfabdflasbdfasdbflasbflasbflasebfsaebflasjebfasbfasbfasbfasdbfsadbfshabfdsbfasdbfasdbfdf",
        description: "maintain IOS...",
        date_published: "2020-05-20",
        locations: "Denver"
      })
      .then(res => {
        expect(res.status).toBe(404);
      });
  })

  it('201 on success', function() {
    return request(server)
      .post('/api/jobs')
      .send({
        ds_id: "A1550124148",
        source_url: "https://www.adzuna.com/land/ad/1550124138?se=wGHBDnif6hGCPf0B37M_Tg&utm_medium=api&utm_source=da871bdc&v=F9032DFA855E78FC254649635160B40FEC3E207E",
        title: "Hardware Engineer",
        description: "maintain IOS...",
        date_published: "2020-05-20",
        locations: "Denver"
      })
      .then(res => {
        expect(res.status).toBe(201);
      });
  });
});
