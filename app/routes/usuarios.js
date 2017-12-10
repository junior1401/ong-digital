module.exports = function(app){
    var controller = app.controllers.usuarios;

    app.get('/usuarios', controller.listar);
    app.get('/usuarios/:id', controller.obterUm);
    app.delete('/usuarios/:id', controller.excluir);
    app.put('/usuarios', controller.novo);
    app.post('/usuarios', controller.atualizar);
}