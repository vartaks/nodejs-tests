const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe("Server", () => {
    describe("GET /", () => {
        it('should return hello sourabh response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect('Hello Sourabh!')
                .end(done);
        });    
    });

    describe("GET /unknown", () => {
        it('should return not found response', (done) => {
            request(app)
                .get('/unknown')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })
                .end(done);
        });
    });

    describe("GET /users", () => {
        it('should return my user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Sourabh',
                        age: 30
                    });
                })
                .end(done);
        });
    });
});
