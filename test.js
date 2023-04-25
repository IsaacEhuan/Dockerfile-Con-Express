const app = require('./index');

const request = require('supertest');


describe('GET /students', () => {
  test('should return a list of students', async () => {
    const response = await request(app).get('/students');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(3);
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0]).toHaveProperty('id');
  });
});

afterAll((done) => {
  app.close(done);
});

//const request = require('supertest')(app);
//const expect = require('chai').expect;

/*describe('GET /students', () => {
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
});*/