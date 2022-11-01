const { Router } = require('express');
const { horoscopes } = require('../horoscopes-data');

module.exports = Router().get('/:sign', (req, res) => {
  const horoscopeSign = horoscopes.find(
    (horoscope) => horoscope.sign === req.params.sign
  );
  res.json(horoscopeSign);
});
