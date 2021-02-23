const { app } = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);
const { cpuData } = require('../data.js');

it('should return the data', async (done) => {
  const expectation = {
    results: cpuData,
  };

  const response = await request.get('/data');

  expect(response.status).toBe(200);
  expect(response.body).toEqual(expectation);
  done();
});

it('should return a single data item', async (done) => {
  const expectation = {
    results: { 
      id: 1,
      name: '3700x',
      cores: 8,
      integrated_gpu: false,
      tdp: 65,
      family: 'Ryzen',
    }
  };

  const response = await request.get('/data/1');


  expect(response.status).toBe(200);
  expect(response.body).toEqual(expectation);
  done();
});
