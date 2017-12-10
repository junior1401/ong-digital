
module.exports = function(app) {

    var controller = {};

    var Usuario = app.models.Usuario;

    controller.listar = function (req, res) {

        Usuario.find().exec().then(
            function(usuarios){    // Callback se der certo
                res.json(usuarios);
            },
            function(erro){         // Callback se der errado
                console.error(erro);
                // HTTP 500: erro interno de servidor
                res.status(500).json(erro);
            }
        );
    }

    controller.obterUm = function (req, res) {

        var idUsuario = req.params.id;

        Usuario.findById(idUsuario).exec().then(
            function(usuario){
                res.json(usuario);
            },
            function(erro){
                console.error(erro);
                // HTTP 404: não encontrado
                res.status(404).json(erro);
            }

        );
    }

    controller.novo = function(req, res){

        req.body.dt_inclusao = new Date(Date.now())

        Usuario.create(req.body).then(
            function(usuario){
                // HTTP 201: criado
                res.status(201).json(usuario)
            },
            function(erro){
                console.error(erro);
                // HTTP 500: erro interno do servidor
                res.status(500).json(erro);
            }
        )
    }

    controller.atualizar = function(req, res){

        var idUsuario = req.body._id;

        req.body.dt_ult_alteracao = new Date(Date.now())

        Usuario.findByIdAndUpdate(idUsuario, req.body).then(
            function(usuario){
                res.status(200).json(usuario);
            },
            function(erro){
                console.error(erro);
                res.status(404).json("Usuario não encontrado para atualizar");
            }
        )
    }

    controller.excluir = function (req, res) {

        var idUsuario = req.params.id;

        Usuario.remove({_id: idUsuario}).exec().then(
            function(){
                res.status(203).end();
            },
            function(erro){
                console.log(erro);
            }
        )

    }

    return controller;
}