
module.exports = function(app) {

    var controller = {};

    var Situacao = app.models.Situacao;

    controller.listar = function (req, res) {

        Situacao.find().exec().then(
            function(situacoes){    // Callback se der certo
                res.json(situacoes);
            },
            function(erro){         // Callback se der errado
                console.error(erro);
                // HTTP 500: erro interno de servidor
                res.status(500).json(erro);
            }
        );
    }

    controller.obterUm = function (req, res) {

        var idSituacao = req.params.id;

        Situacao.findById(idSituacao).exec().then(
            function(situacao){
                res.json(situacao);
            },
            function(erro){
                console.error(erro);
                // HTTP 404: não encontrado
                res.status(404).json(erro);
            }

        );
    }

    controller.novo = function(req, res){

        Situacao.create(req.body).then(
            function(situacao){
                // HTTP 201: criado
                res.status(201).json(situacao)
            },
            function(erro){
                console.error(erro);
                // HTTP 500: erro interno do servidor
                res.status(500).json(erro);
            }
        )
    }

    controller.atualizar = function(req, res){

        var idSituacao = req.body._id;

        Situacao.findByIdAndUpdate(idSituacao, req.body).then(
            function(situacao){
                res.status(200).json(situacao);
            },
            function(erro){
                console.error(erro);
                res.status(404).json("Situacao não encontrada para atualizar");
            }
        )
    }

    controller.excluir = function (req, res) {

        var idSituacao = req.params.id;

        Situacao.remove({_id: idSituacao}).exec().then(
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