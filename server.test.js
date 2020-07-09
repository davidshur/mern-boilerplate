const app = require('./server');
const supertest = require('supertest');
const request = supertest(app);

describe('express routes', () => {
  it('gets / endpoint', async done => {
    const res = await request.get('/');

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello world!');
    done();
  });

  it('404 if route not found', async done => {
    const res = await request.get('/foo/bar');

    expect(res.status).toBe(404);
    done();
  });
});

