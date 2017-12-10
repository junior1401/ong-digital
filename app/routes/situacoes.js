module.exports = function(app){
    var controller = app.controllers.situacoes;

    app.get('/situacoes', controller.listar);
    app.get('/situacoes/:id', controller.obterUm);
    app.delete('/situacoes/:id', controller.excluir);
    app.put('/situacoes', controller.novo);
    app.post('/situacoes', controller.atualizar);
}