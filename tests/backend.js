//import controllers and other functions
//require them in and assign to variables
//use dotnotation to access specific functions
//require in fs
const request = require('supertest');
const fs = require('fs');
//require in path
const path = require('path');
const server = 'http://localhost:3000';
const petController = require('../controller/petController');

//invoke describe func for 'petController tests'
describe('Route integration', () => {
  //tests requests to '/'
  describe('/', () => {
    //test get requests to '/'
    desribe('GET', () => {
      //define test case for 200 response status and desired content type
      it('responds with 200 status and text/html content type', () => {
        //use supertest request function to request response for server
        return (
          request(server)
            //get the path '/'
            .get('/')
            //expect to recieve text/html
            .expect('Content-Type', /text\/html/)
            //expect status
            .expect(200)
        );
      });
    });
  });
  //tests to '/pets'
  describe('/pets', () => {
    //tests get requests to '/pets'
    describe('GET', () => {
      //define test case, we want 200 status and app/json content type
      it('responds with 200 status and application/json content type', () => {
        //make request to server
        return (
          request(server)
            //at '/pets'
            .get('/pets')
            //expect app/json
            .expect('Content-Type', /application\/json/)
            //expect 200 status
            .expect(200)
        );
      });
    });

    describe('GET', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
          .get('/pets:id')
          .expects('Content-Type', /application\/json/)
          .expect(200);
      });
    });
    //testing additions to database
    describe('POST', () => {
      //before each test, create mock database info
      beforeEach(async () => {
        const pets = [
          {
            name: 'test',
            picture: 'testPicture',
          },
        ];

        await request(server).post('/pets').setEncoding(pets);
      });
      //define test case, we want 200 status and app/json
      it('responds with 200 status and application/json content type', () => {
        //return request from server
        return (
          request(server)
            //handle post requests to post
            .post('/pets')
            //expect content to be app/json
            .expect('Content-Type', /application\/json/)
            //
            .expect(200)
        );
      });
      it('responds with the updated market list', () => {});

      it('responds to invalid request with 400 status and error message in body', () => {});
    });
    // describe('PATCH', () => {})
  });
});
//
