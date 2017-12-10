var mongoose = require('mongoose');

module.exports = function(){

    var schema = mongoose.Schema({

        nome:{
            type: String,
            required: true
        },

        rg:{
            type: String
        },

        cpf:{
            type: String,
            required: true
        },

        cor:{
            type: String,
            required: true
        },
        
        sexo:{
            type: String,
            required: true
        },

        dt_nascimento:{
            type: Date
        },

        escola_atual:{
            type: String
        },

        nome_responsavel:{
            type: String
        },

        tel_responsavel:{
            type: String
        },

        dt_entrada:{
            type: Date,
            required: true
        },

        dt_desligamento:{
            type: Date
        },

        situacao:{
            type: mongoose.Schema.ObjectId,
            ref: 'Situacao',
            required: true
        },

        usuario:{
            type: mongoose.Schema.ObjectId,
            ref: 'Usuario',
            required: true
        }

    });

    return mongoose.model('Crianca', schema, 'criancas');
}