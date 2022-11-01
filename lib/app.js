const express = require('express');
const app = express();
const { zodiacs } = require('./zodiac-data');
const { horoscopes } = require('./horoscopes-data');

// app.use('/', (req, res) => {
//   res.send('hello world!');
// });

app.use('/zodiac', (req, res) => {
  const filteredZodiac = zodiacs.map((zodiac) => {
    return {
      id: zodiac.id,
      name: zodiac.name,
    };
  });
  res.json(filteredZodiac);
});

module.exports = app;
