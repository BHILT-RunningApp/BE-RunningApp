const chai = require("chai")
const mongoose = require('mongoose')
const { expect } = require('chai');
const request = require('supertest');
const { app } = require('../server');
mongoose.Promise = global.Promise;

describe('Database tests', () => {

    it('/users', () => {
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