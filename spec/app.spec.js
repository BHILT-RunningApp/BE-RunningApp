const chai = require("chai")
const mongoose = require('mongoose')
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
                expect(body).to.be.an('object')
            })
    });
    it('returns an object with an array of users', () => {
        return request(app)
            .get('/api/users')
            .expect(200)
            .then(({ body }) => {
                expect(body.users).to.be.an('array')
            })
    });
    it('returns an array of objects with the users keys', () => {
        return request(app)
            .get('/api/users')
            .expect(200)
            .then(({ body }) => {
                expect(body.users[0]).to.have.keys('_id', 'username', 'email', 'password', 'current_location', '__v')
            })
    });
});
describe('/pollution-points', () => {
    it('returns an object', () => {
        return request(app)
            .get('/api/pollution-points')
            .expect(200)
            .then(({ body }) => {
                expect(body).to.be.an('object')
            })
    });
    it('returns an object with an array of pollution points', () => {
        return request(app)
            .get('/api/pollution-points')
            .expect(200)
            .then(({ body }) => {
                expect(body.pollutionPoints).to.be.an('array')
            })
    });
    it('returns an array of objects with the pollution points keys', () => {
        return request(app)
            .get('/api/pollution-points')
            .expect(200)
            .then(({ body }) => {
                expect(body.pollutionPoints[0]).to.have.keys('pp_coordinates', 'pm', 'name', 'midday', 'id', 'am', '_id', '__v')
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
            })
            .expect(201)
            .then(({ body }) => {
                console.log(body)
                expect(body).to.be.an('object');
                expect(body.user).to.have.keys('username', 'email', 'password', 'current_location', '_id', '__v');
            })
    });
});