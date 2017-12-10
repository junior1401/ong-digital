module.exports = function() {

    var controller = {}; //Objeto vazio

    controller.index = function(req, res){
        // Renderização de view com uma variável
        res.render('index', {nome: "ONG-Digital"});
    }

    controller.ajuda = function(req, res){
        // Renderização de view sem variáveis
        res.render('ajuda');
    }

    controller.login = function(req, res){
        // Renderização de view com mais de uma variável
        res.render('login', {nome: "ONG-Digital", mensagem: "Informe seus dados para autenticação"});
    }

    return controller;

}