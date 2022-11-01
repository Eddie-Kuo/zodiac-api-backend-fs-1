const express = require('express');
const app = express();
const path = require('path');

app.use('/zodiac', require('./controllers/zodiacs'));
app.use('/horoscope', require('./controllers/horoscope'));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;

// const { zodiacs } = require('./zodiac-data');
// const { horoscopes } = require('./horoscopes-data');

// app.use('/', (req, res) => {
//   res.send('hello world!');
// });

// app.use('/horoscope/:sign', (req, res) => {
//   const horoscopeSign = horoscopes.find(
//     (horoscope) => horoscope.sign === req.params.sign
//   );
//   res.json(horoscopeSign);
// });

// app.use('/zodiac/:id', (req, res) => {
//   const zodiacSign = zodiacs.find((zodiac) => zodiac.id === req.params.id);
//   res.json(zodiacSign);
// });

// app.use('/zodiac', (req, res) => {
//   const filteredZodiac = zodiacs.map((zodiac) => {
//     return {
//       id: zodiac.id,
//       name: zodiac.name,
//     };
//   });
//   res.json(filteredZodiac);
// });
