
module.exports = function (app) {

    var controller = {};

    var Crianca = app.models.Crianca;

    controller.listar = function (req, res) {

        Crianca.find().populate('situacao')
        .populate('usuario').exec().then(
            function (criancas) {    // Callback se der certo
                res.json(criancas);
            },
            function (erro) {         // Callback se der errado
                console.error(erro);
                // HTTP 500: erro interno de servidor
                res.status(500).json(erro);
            }
        );
    }


    controller.obterUm = function (req, res) {

        var idCrianca = req.params.id;

        Crianca.findById(idCrianca).exec().then(
            function (crianca) {
                res.json(crianca);
            },
            function (erro) {
                console.error(erro);
                // HTTP 404: não encontrado
                res.status(404).json(erro);
            }

        );
    }

    controller.novo = function(req, res){

        Crianca.create(req.body).then(
            function(crianca){
                // HTTP 201: criado
                res.status(201).json(crianca)
            },
            function(erro){
                console.error(erro);
                // HTTP 500: erro interno do servidor
                res.status(500).json(erro);
            }
        )
    }

    controller.atualizar = function(req, res){

        var idCrianca = req.body._id;

        Crianca.findByIdAndUpdate(idCrianca, req.body).then(
            function(crianca){
                res.status(200).json(crianca);
            },
            function(erro){
                console.error(erro);
                res.status(404).json("Crianca não encontrada para atualizar");
            }
        )
    }

    controller.excluir = function (req, res) {

        var idCrianca = req.params.id;

        Crianca.remove({_id: idCrianca}).exec().then(
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