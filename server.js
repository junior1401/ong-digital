var http = require('http');         // variavel que recebe protocolo http
var express = require('./config/express');

var db = require('./config/database');

// Iniciamos a conexão com o banco de dados
// junto com a aplicação
// Conecta-se ao MongoDB no servidor localhost
// para utilizar o banco de dados recanto-esp
db('mongodb://localhost/recanto-esp');

var app = express();

/* servidor criado na unha
http.createServer(                  // criando servidor
    function(req, res){             // funcao que recebe e devolve requisicao    
        res.writeHead(200,{'Content-Type':'text/plain'});           //informando o tipo de pagina que será exibida neste caso um texto simples
        res.end('Este é um servidor implementando em Node.js');     // retornando mensagem
    }
).listen(3000,'127.0.0.1');         // mudando para uma porta para trabalhar a porta padrao eh 80
*/
 http.createServer(app).listen(
    app.get('port'),
    app.get('ip'), 
    function(){
        console.log('Express server escutando porta '+ app.get('port') );
    }
);