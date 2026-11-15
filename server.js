var http = require('http');
var express = require('express');

var app = express();

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static('./public'));


var server = http.createServer(app);

server.listen(80);

console.log("servidor rodando....");

////////////////////////////////////////////////////

app.get('/cadastra', function cadastro(req, res) {
    let nome = req.query.nome;
    let email = req.query.email;
    let senha = req.query.senha;
    console.log(nome, email, senha);
    res.render("resposta.ejs", { Name: nome });

});
app.get('/login', function login(req, res) {
    let nome = req.query.nome;
    let email = req.query.email;
    let senha = req.query.senha;
    console.log(nome, email, senha);
    res.render("resposta.ejs", { Name: nome });

});