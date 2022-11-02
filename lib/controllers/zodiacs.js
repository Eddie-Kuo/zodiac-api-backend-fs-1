const { Router } = require('express');
const { zodiacs } = require('../zodiac-data');

//module.exports = Router
// .get methods ()

module.exports = Router()
  .get('/:id', (req, res) => {
    const zodiacSign = zodiacs.find((zodiac) => zodiac.id === req.params.id);
    res.json(zodiacSign);
  })
  .get('/', (req, res) => {
    const filteredZodiac = zodiacs.map((zodiac) => {
      return {
        id: zodiac.id,
        name: zodiac.name,
      };
    });
    res.json(filteredZodiac);
  });
