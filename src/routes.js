const { Router } = require('express');
const DiceController = require('./controller/dice/DiceController');

const routes = Router();

// Métodos HTTP: GET, PUT, POST, PUT, DELETE

// Tipos de Parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação, ....)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body 

// Exemplo Básico
routes.get('/', (request, response) => {
    return response.json({nome:"luiz massa de pontes"});
});

//Exemplo Query Params
routes.get('/', (request, response) => {
    console.log(request.query);
    return response.json({nome:"luiz massa de pontes"});
});

//Exemplo Route Params
routes.put('/users/:id', (request, response) => {
    console.log(request.params);
    return response.json({nome:"luiz massa de pontes"});
});

//Exemplo Body
routes.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({nome:"luiz massa de pontes"});
});

//Rota para cadastro dos Dices
routes.post('/dices', DiceController.store);
routes.get('/dices', DiceController.index);

module.exports = routes;
