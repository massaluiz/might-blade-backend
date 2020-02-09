const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();


// MongoDB (Não-relacional) - Conexão com o Banco
mongoose.connect('mongodb+srv://luizmassa:massaluiz@cluster0-m1vlz.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Configuração para o express reconhecer json
app.use(express.json());
app.use(routes);

app.listen(3333);