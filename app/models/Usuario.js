var mongoose = require('mongoose');

module.exports = function(){

    var schema = mongoose.Schema({

        nome:{
            type: String,
            required: true
        },

        login:{
            type: String,
            required: true
        },

        senha:{
            type: String,
            required: true
        },

        funcao:{
            type: String,
        },

        tipo_user:{
            type: String,
            required: true
        },

        status:{
            type: String,
        },

        dt_inclusao:{
            type: Date,
            required: true
        },

        dt_ult_alteracao:{
            type: Date
        },

    });

    return mongoose.model('Usuario', schema, 'usuarios');
}