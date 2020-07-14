const app = require('./server');
const supertest = require('supertest');
const request = supertest(app);

describe('express routes', () => {
  it('404 if route not found', async done => {
    const res = await request.get('/foo/bar');

    expect(res.status).toBe(404);
    done();
  });
});

