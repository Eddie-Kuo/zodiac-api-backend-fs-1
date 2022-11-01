const request = require('supertest');
const app = require('../lib/app');

describe('example test - you should probably update me', () => {
  it('home route should return hello world', async () => {
    const resp = await request(app).get('/');
    expect(resp.text).toEqual('hello world!');
  });
});

// test 1 is expected to show list of all zodiac names and id on /zodiac route
// test 2 is expected to show details of the zodiac based on the id
