const express = require('express');
const DiceRoute = require('./src/routes/dice/DiceRoute');

const app = express();

app.use(express.json());
app.use(DiceRoute);

app.listen(3333); 