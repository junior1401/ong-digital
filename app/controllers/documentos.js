
module.exports = function(app) {

    var controller = {};

    var Documento = app.models.Documento;

    controller.listar = function (req, res) {

        Documento.find().populate('crianca')
        .populate('usuario').exec().then(
            function(documentos){    // Callback se der certo
                res.json(documentos);
            },
            function(erro){         // Callback se der errado
                console.error(erro);
                // HTTP 500: erro interno de servidor
                res.status(500).json(erro);
            }
        );
    }

    controller.obterUm = function (req, res) {

        var idDocumento = req.params.id;

        Documento.findById(idDocumento).exec().then(
            function(documento){
                res.json(documento);
            },
            function(erro){
                console.error(erro);
                // HTTP 404: não encontrado
                res.status(404).json(erro);
            }

        );
    }

    controller.novo = function(req, res){

        Documento.create(req.body).then(
            function(documento){
                // HTTP 201: criado
                res.status(201).json(documento)
            },
            function(erro){
                console.error(erro);
                // HTTP 500: erro interno do servidor
                res.status(500).json(erro);
            }
        )
    }

    controller.atualizar = function(req, res){

        var idDocumento = req.body._id;

        Documento.findByIdAndUpdate(idDocumento, req.body).then(
            function(documento){
                res.status(200).json(documento);
            },
            function(erro){
                console.error(erro);
                res.status(404).json("Documento não encontrado para atualizar");
            }
        )
    }

    controller.excluir = function (req, res) {

        var idDocumento = req.params.id;

        Documento.remove({_id: idDocumento}).exec().then(
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