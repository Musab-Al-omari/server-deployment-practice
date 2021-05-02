'use strict'
const server = require('../server.js');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const serverRequest = supertest(server.app); //the app object from the server.js


//describe comes from jest
describe('testing server module', () => {
    it('handles not found routes', async () => {
        let response = await serverRequest.get('/not-found-route');
        expect(response.status).toEqual(404);
    });
    // it('error handles', async () => {
    //     let response = await serverRequest.get('/bad-request2');
    //     expect(response.status).toEqual(500);
    // });
    it('home handler', async () => {
        let response = await serverRequest.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('hello world my name is musab')
    });
})