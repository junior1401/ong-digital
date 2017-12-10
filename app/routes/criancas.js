module.exports = function(app){
    var controller = app.controllers.criancas;

    app.get('/criancas', controller.listar);
    app.get('/criancas/:id', controller.obterUm);
    app.delete('/criancas/:id', controller.excluir);
    app.put('/criancas', controller.novo);
    app.post('/criancas', controller.atualizar);
}