const app = require('./app');
const request = require('supertest')(app);
const expect = require('chai').expect;

describe('GET /students', () => {
  it('responds with JSON array', (done) => {
    request.get('/students')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});