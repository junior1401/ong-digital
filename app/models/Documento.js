var mongoose = require('mongoose');

module.exports = function(){

    var schema = mongoose.Schema({

        nome:{
            type: String,
            required: true
        },

        tags: {
            type: String
        },

        local_arquivo:{
            type: String,
            required: true
        },

        dt_importacao:{
            type: Date,
            required: true
        },

        crianca:{
            type: mongoose.Schema.ObjectId,
            ref: 'Crianca',
            required: true
        },

        usuario:{
            type: mongoose.Schema.ObjectId,
            ref: 'Usuario',
            required: true
        }

    });

    return mongoose.model('Documento', schema);
}