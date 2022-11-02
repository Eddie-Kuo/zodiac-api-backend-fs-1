const request = require('supertest');
const app = require('../lib/app');
const { zodiacs } = require('../lib/zodiac-data');
// const { horoscopes } = require('../lib/horoscopes-data');

// describe('example test - you should probably update me', () => {
//   it('home route should return hello world', async () => {
//     const resp = await request(app).get('/');
//     expect(resp.text).toEqual('hello world!');
//   });
// });

// test 1 is expected to show list of all zodiac names and id on /zodiac route

describe('zodiac routes', () => {
  test('/zodiac route should display list of zodiac names with id', async () => {
    const res = await request(app).get('/zodiac');
    // making a get request from 'app' with '/zodiac' controller
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });

  // test 2 is expected to show details of the zodiac based on the id
  test('/zodiac/:id route should display the zodiac + details with matching id', async () => {
    const res = await request(app).get('/zodiac/1');
    const expected = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(res.body).toEqual(expected);
  });
});

// test 3 is expected to show the horoscope route from an object we need to make
describe('horoscope routes', () => {
  test('/horoscope/:sign route returns the corresponding horoscope', async () => {
    const res = await request(app).get('/horoscope/aquarius');
    const expected = {
      sign: 'aquarius',
      horoscope: 'https://ohmanda.com/api/horoscope/aquarius',
    };
    expect(res.body).toEqual(expected);
  });
});
