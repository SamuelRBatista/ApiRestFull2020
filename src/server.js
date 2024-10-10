const express = require('express');
const routes = require('./Rotas/routes');



require('./database');

const app = express();
app.use(express.json());


app.use(routes);


app.listen(3333);
