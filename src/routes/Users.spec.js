const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

describe('create users POST /', function () {
    beforeEach(async () => {
        await db('users').truncate();
    })

    it('500 on missing data', function () {
        return request(server)
            .post('/api/users')
            .send({ 

            })
            .then(res => {
                expect(res.status).toBe(500);
            });
    });

    // it('404 on fail to pose', function() {
    //     return request(server)
    //         .post('/api/users')
    //         .send({
                
    //         })
    //         .then(res => {
    //             expect(res.status).toBe(404);
    //         });
    // })

    it('200 on success', function() {
        return request(server)
            .post('/api/users')
            .send({
                first_name: 'Super',
                last_name: 'Man',
                email: 'peterparker@newyork.com',
                profile_image: '',
                user_track: 'Web',
                skills: 'HTML,CSS,JavaScript,React,Node,Express',
                locations: 'New York,London,Los Angeles',
                remote: true
            })
            .then(res => {
                expect(res.status).toBe(200);
            });
    })

    describe('get user GET/', () => {
        it('should return 200 OK', function () {
            return request(server)
                .get("/api/users/1")
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });

        it('should return JSON', function() {
            return request(server).get('/api/users/1')
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                })
        })
    });

    describe('update user PUT/users/1', () => {
        it('should return 201 OK', function () {
            return request(server)
                .put("/api/users/1")
                .send({
                    first_name: 'Super',
                    last_name: 'Man',
                    profile_image: '',
                    user_track: 'DS',
                    skills: 'HTML,CSS,JavaScript,React,Node,Express',
                    locations: 'New York,London,Los Angeles',
                    remote: true
                })
                .then(res => {
                    expect(res.status).toBe(404);
                });
        });
    });

})

describe("PUT /users/1", () => {
    test("It responds with an updated user", async () => {
      const newUser = await request(server)
        .post("/api/users")
        .send({
            first_name: 'Cinderalla',
            last_name: 'Disney',
            email: 'Cinderalla@newyork.com',
            profile_image: '',
            user_track: 'Web',
            skills: 'HTML,CSS,JavaScript,React,Node,Express',
            locations: 'New York,Miami,Los Angeles',
            remote: true
        });
      const updatedUser = await request(server)
        .put(`/api/users/${newUser.body.id}`)
        .send({ user_track: 'Data Science' });
      expect(updatedUser.body.user_track).toBe('Data Science');
      expect(updatedUser.body).toHaveProperty("id");
      expect(updatedUser.statusCode).toBe(201);
  
      // make sure we have 3 students
    //   const response = await request(app).get("/students");
    //   expect(response.body.length).toBe(3);
    });
});

describe("DELETE /users/1", () => {
    test("It responds with a message of Deleted", async () => {
      const newUser = await request(server)
        .post("/api/users")
        .send({
            first_name: 'Cinderalla',
            last_name: 'Disney',
            email: 'Cinderalla@newyork.com',
            profile_image: '',
            user_track: 'Web',
            skills: 'HTML,CSS,JavaScript,React,Node,Express',
            locations: 'New York,Miami,Los Angeles',
            remote: true
        });
      const removedUser = await request(server).delete(
        `/api/users/${newUser.body.id}`
      );
    //   expect(removedUser.body).toEqual({ message: "User deleted successfully" });
      expect(removedUser.statusCode).toBe(201);
  
      // make sure we still have 2 students
    //   const response = await request(app).get("/students");
    //   expect(response.body.length).toBe(2);
    });
});