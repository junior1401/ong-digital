module.exports = function(app){
    var controller = app.controllers.documentos;

    app.get('/documentos', controller.listar);
    app.get('/documentos/:id', controller.obterUm);
    app.delete('/documentos/:id', controller.excluir);
    app.put('/documentos', controller.novo);
    app.post('/documentos', controller.atualizar);
}