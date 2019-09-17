const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers/helpers');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


// Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'Omar',
        anio: new Date().getFullYear()
    });
});

app.get('/about', function(req, res) {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.get('/data', (req, res) => {
    res.send('Hola Data');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});