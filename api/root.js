const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('API Naveteam');
});

//rotas
const naverRouters = require('./routes/naversRouter');
app.use('/navers', naverRouters);

const projetoController = require('./routes/projetosRouter');
app.use('/projetos', projetoController);

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port + '!');
});