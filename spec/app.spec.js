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
          'end_location'
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
        expect(body).to.be.an('object');
      });
  });
  it('returns an object, containing a pollutionPoints key with an array of pollution points', () => {
    return request(app)
      .get('/api/pollution-points')
      .expect(200)
      .then(({ body }) => {
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

  it('returns an object', () => {
    return request(app)
      .get('/api/pollution-points')
      .expect(200)
      .then(({ body }) => {
        expect(body).to.be.an('object');
      });
  });
  it('returns an object with an array of pollution points', () => {
    return request(app)
      .get('/api/pollution-points')
      .expect(200)
      .then(({ body }) => {
        expect(body.geoJSONAndPollutionPoints.pollutionPoints).to.be.an('array')
      })
  });
  it('returns an array of objects with the pollution points keys', () => {
    return request(app)
      .get('/api/pollution-points')
      .expect(200)
      .then(({ body }) => {
        expect(body.geoJSONAndPollutionPoints.pollutionPoints[0]).to.have.keys('pp_coordinates', 'pm', 'name', 'midday', 'id', 'am', '_id')
      })
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
        current_location: '53.4860211, -2.2397307',
        end_location: {
          lat: 0,
          long: 0
        }
      })
      .expect(201)
      .then(({ body }) => {
        expect(body).to.be.an('object');
        expect(body.user).to.have.keys('username', 'email', 'password', 'current_location', '_id', '__v', 'end_location');
      })
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
          'current_location',
          'end_location'
        );
      });
  });
});
it('updates the users geo-location', () => {
  return request(app)
    .patch('/api/users')
    .send({
      username: 'harry', current_location: '53.4860211, -2.2397307', end_location: {
        lat: 69, long: 69
      }
    })
    .expect(200)
    .then(({ body }) => {
      expect(body.user).to.have.keys('_id', 'username', 'email', "password", "current_location", 'end_location')
    })
});

describe('/pollution-point/:PP_id GET', () => {
  it('gets one pollution point ', () => {
    return request(app)
      .get('/api/pollution-points/5df0c56a4870f2635ade79ff')
      .expect(200)
      .then(({ body }) => {
        expect(body.pollutionPoint).to.be.an('object')
        expect(body.pollutionPoint.name).to.eql('Lego Store (Brown Street)')
      })
  });
});
describe('error handling', () => {
  it('ERROR DELETE /users not allowed ', () => {
    return request(app)
      .delete('/api/users')
      .expect(405)
      .then(({ body }) => {
        expect(body).to.eql({ msg: 'DELETE method not allowed on this endpoint.' })
      })
  });
  it('ERROR DELETE /pollution-points', () => {
    return request(app)
      .delete('/api/pollution-points')
      .expect(405)
      .then(({ body }) => {
        expect(body).to.eql({ msg: 'DELETE method not allowed on this endpoint.' })
      })
  });
  it('ERROR PATCH /pollution-points', () => {
    return request(app)
      .patch('/api/pollution-points')
      .send({
        pp_coordinates: {
          lat: 53.481471,
          long: -2.242734
        }
      })
      .expect(405)
      .then(({ body }) => {
        expect(body).to.eql({ msg: 'PATCH method not allowed on this endpoint.' })
      })
  });
  it('ERROR POST /pollution-points', () => {
    return request(app)
      .post('/api/pollution-points')
      .send({
        name: 'Lego Store (Brown Street)',
        id: 1,
        pp_coordinates: {
          lat: 53.481471,
          long: -2.242734,
        },
        am: {
          pollutants: {
            no2: 86.44,
            pm10: 43.33,
            so2: 0.44,
            o3: 2.59,
            pm25: 25.30,
          },
          aqi: 0,
          top_corner: {
            lat: 0,
            long: 0,
          },
          bottom_corner: {
            lat: 0,
            long: 0,
          }
        },
        midday: {
          pollutants: {
            no2: 76.50,
            pm10: 54.16,
            so2: 3.26,
            o3: 3.59,
            pm25: 21,
          },
          aqi: 0,
          top_corner: {
            lat: 0,
            long: 0,
          },
          bottom_corner: {
            lat: 0,
            long: 0,
          }
        },
        pm: {
          pollutants: {
            no2: 73.06,
            pm10: 21.67,
            so2: 3.13,
            o3: 2.79,
            pm25: 28.60,
          },
          aqi: 0,
          top_corner: {
            lat: 0,
            long: 0,
          },
          bottom_corner: {
            lat: 0,
            long: 0,
          }
        }
      })
      .expect(405)
      .then(({ body }) => {
        expect(body).to.eql({ msg: 'POST method not allowed on this endpoint.' })
      })
  });
  it('ERROR DELETE /pollution-points/ :id', () => {
    return request(app)
      .delete('/api/pollution-points/5df0c56a4870f2635ade79ff')
      .expect(405)
      .then(({ body }) => {
        expect(body).to.eql({ msg: 'DELETE method not allowed on this endpoint.' })
      })
  });
  it('ERROR PATCH /pollution-points /: id', () => {
    return request(app)
      .patch('/api/pollution-points/5df0c56a4870f2635ade79ff')
      .send({
        pp_coordinates: {
          lat: 53.481471,
          long: -2.242734
        }
      })
      .expect(405)
      .then(({ body }) => {
        expect(body).to.eql({ msg: 'PATCH method not allowed on this endpoint.' })
      })
  });
  it('ERROR POST /pollution-points/:id', () => {
    return request(app)
      .post('/api/pollution-points/5df0c56a4870f2635ade79ff')
      .send({
        name: 'Lego Store (Brown Street)',
        id: 1,
        pp_coordinates: {
          lat: 53.481471,
          long: -2.242734,
        },
        am: {
          pollutants: {
            no2: 86.44,
            pm10: 43.33,
            so2: 0.44,
            o3: 2.59,
            pm25: 25.30,
          },
          aqi: 0,
          top_corner: {
            lat: 0,
            long: 0,
          },
          bottom_corner: {
            lat: 0,
            long: 0,
          }
        },
        midday: {
          pollutants: {
            no2: 76.50,
            pm10: 54.16,
            so2: 3.26,
            o3: 3.59,
            pm25: 21,
          },
          aqi: 0,
          top_corner: {
            lat: 0,
            long: 0,
          },
          bottom_corner: {
            lat: 0,
            long: 0,
          }
        },
        pm: {
          pollutants: {
            no2: 73.06,
            pm10: 21.67,
            so2: 3.13,
            o3: 2.79,
            pm25: 28.60,
          },
          aqi: 0,
          top_corner: {
            lat: 0,
            long: 0,
          },
          bottom_corner: {
            lat: 0,
            long: 0,
          }
        }
      })
      .expect(405)
      .then(({ body }) => {
        expect(body).to.eql({ msg: 'POST method not allowed on this endpoint.' })
      })
  });
});
