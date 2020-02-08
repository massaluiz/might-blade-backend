const { Router } = require('express');

const diceRoute = Router();

diceRoute.get('/1d6', (request, response) => {
   return response.json({'1d6': parseInt(Math.random() * (6 - 1) + 1)}); 
});

module.exports = diceRoute;