const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err) {});


// Servir contenido Estatico
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.render('home', {
        nombre: "Elkin Beltran",
        titulo: "Prueba "
    });
})

app.get('/generic', function(req, res) {
    res.render('generic', {
        nombre: "Elkin Beltran",
        titulo: "Prueba "
    });
})

app.get('/elements', function(req, res) {
    res.render('elements', {
        nombre: "Elkin Beltran",
        titulo: "Prueba "
    });
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('*', (req, res) => {
    res.send('Not Found 404');
})



app.listen(port);