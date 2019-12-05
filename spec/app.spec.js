const chai = require("chai")
// const mongoose = require('mongoose')
const { expect } = require('chai');
const request = require('supertest');
const app = require('../server');
const { UserModel } = require('../models/mongooseUserModel')
mongoose.Promise = global.Promise;

describe('Database tests', () => {
    it('/users', () => {
        return request(app)
            .get('/api/users')
            .expect(200)
            .then(({ body }) => {
                console.log(body)
                expect(body.users).to.be.an('object')
            })
    });
});