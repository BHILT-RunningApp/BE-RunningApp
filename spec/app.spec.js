const chai = require("chai")
const mongoose = require('mongoose')
const { expect } = require('chai');
const request = require('supertest');
const { app } = require('../server');

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