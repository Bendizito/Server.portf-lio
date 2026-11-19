var http = require('http');
var express = require('express');

var app = express();

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.set('views', './views');


var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;


const uri = `mongodb://localhost:27017/`;


const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("Blog");
var posts = dbo.collection("Posts");




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

app.get("/blog", function(req, res){
    let items = [];
    res.render("blog.ejs", {items})
});

app.get("/criar", function(req, res){
    res.redirect("criarpost.html");
});

app.get("/criar_post", function (req, res){
    let titulo = req.query.titulo;
    let resumo = req.query.resumo;
    let conteudo = req.query.conteudo;

    let data = {db_titulo: titulo, db_resumo: resumo, db_conteudo: conteudo};

    users.insertOne(data, function (err) {
      if (err) {
        console.log(err);
        res.render('resposta_usuario.ejs', {resposta: "Erro ao cadastrar post!"})
      }else{
            let data = {}
            posts.find(data).toArray(function(err, items){
                res.render("blog.ejs", {items})   
            });
            
        
        } ;
        
    });
})


app.get("/acesso", function(req, res){
    res.redirect("blog.ejs");
});
