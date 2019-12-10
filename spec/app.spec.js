const { expect } = require('chai');
const request = require('supertest');
const { app } = require('../server');
const faker = require('faker');

describe('/users', () => {
  it('returns an object', () => {
    return request(app)
      .get('/api/users')
      .expect(200)
      .then(({ body }) => {
        expect(body).to.be.an('object');
      });
  });
  it('returns an object with an array of users', () => {
    return request(app)
      .get('/api/users')
      .expect(200)
      .then(({ body }) => {
        expect(body.users).to.be.an('array');
      });
  });
  it('returns an array of objects with the users keys', () => {
    return request(app)
      .get('/api/users')
      .expect(200)
      .then(({ body }) => {
        expect(body.users[0]).to.have.keys(
          '_id',
          'username',
          'email',
          'password',
          'current_location',
          '__v'
        );
      });
  });
});
describe('/pollution-points', () => {
  it('returns an object', () => {
    return request(app)
      .get('/api/pollution-points')
      .expect(200)
      .then(({ body }) => {
        // console.log(body.pollutionPoints[0].am.top_corner);
        expect(body).to.be.an('object');
      });
  });
  it('returns an object, containing a pollutionPoints key with an array of pollution points', () => {
    return request(app)
      .get('/api/pollution-points')
      .expect(200)
      .then(({ body }) => {
        console.log('TEST BODY ->', body);
        expect(body.geoJSONAndPollutionPoints.pollutionPoints).to.be.an(
          'array'
        );
      });
  });
  it('the pollutionPoints key contains an array of objects with the pollution points keys', () => {
    return request(app)
      .get('/api/pollution-points')
      .expect(200)
      .then(({ body }) => {
        expect(body.geoJSONAndPollutionPoints.pollutionPoints[0]).to.have.keys(
          'pp_coordinates',
          'pm',
          'name',
          'midday',
          'id',
          'am',
          '_id'
        );
      });
  });
  it('the objects contained in the features key array have the expected keys', () => {
    return request(app)
      .get('/api/pollution-points')
      .expect(200)
      .then(({ body }) => {
        expect(body.geoJSONAndPollutionPoints.features[0]).to.have.keys(
          'type',
          'properties',
          'geometry'
        );
      });
  });
});
describe('/users POST', () => {
  it('returns an object with the new user', () => {
    const randomName = faker.name.findName();
    return request(app)
      .post('/api/users')
      .send({
        username: `${randomName}`,
        email: 'user@gmail.com',
        password: 'dsfdfdfdfdfd',
        current_location: '53.4860211, -2.2397307'
      })
      .expect(201)
      .then(({ body }) => {
        expect(body).to.be.an('object');
        expect(body.user).to.have.keys(
          'username',
          'email',
          'password',
          'current_location',
          '_id',
          '__v'
        );
      });
  });
});
describe('/users PATCH', () => {
  it('updates the users geo-location', () => {
    return request(app)
      .patch('/api/users')
      .send({ username: 'harry', current_location: '11111, 678811111190' })
      .expect(200)
      .then(({ body }) => {
        expect(body.user).to.have.keys(
          '_id',
          'username',
          'email',
          'password',
          'current_location'
        );
      });
  });
});
