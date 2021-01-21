const request = require('supertest');

const port = 3003;

// homes id tests;

describe('/homes/:id', () => {
  const id = Math.floor(Math.random() * 99);

  it('Sends get request successfully..', (data) => {
    request(`localhost:${port}`)
      .get(`/homes/${id}`)
      .expect(200, data);
  });
  it('Return correct data..', (done) => {
    request(`localhost:${port}`)
      .get(`/homes/${id}`)
      .send()
      .expect((res) => {
        res.body.id = id;
      })
      .expect(200, done);
  });
});

// mortgage routes tests;

describe('/mortgage/:id', () => {
  it('Sends get request successfully', (data) => {
    request(`localhost:${port}`).get('/mortgage').expect(200, data);
  });
  it('returns correct data..', (done) => {
    request(`localhost:${port}`)
      .get('/mortgage')
      .send()
      .expect((res) => {
        res.body[0].id = !null;
      })
      .expect(200, done);
  });
});
