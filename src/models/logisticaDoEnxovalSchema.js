const mongoose = require('mongoose')

const LogisticaDoEnxovalSchema = mongoose.Schema({

    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },

    shortSleeveBodysuit: {
        type: Boolean,
        required: false
    },
    
    longSleeveBodysuit:{
        type: Boolean,
        required: false
    },

    pants:{
        type: Boolean,
        required: false
    },
    
    shortSleeveTShirt:{
        type: Boolean,
        required: false
    },

    longSleeveShirt:{
        type: Boolean,
        required: true
    },
    shortJumpsuit:{
        type: Boolean,
        required: true
    },

    longSuit:{
        type: Boolean,
        required: true
    },

    socks:{
        type: Boolean,
        required: true
    },

    cradle: {
        type: Boolean,
        required: true
    },

    blanket:{
        type: Boolean,
        required: true
    },

    babyCarriagem:{
        type: Boolean,
        required: true
    },

    pedido: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "pedidoEnxoval"
    },

    cadastro: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "customerRegistration"
    },

    place:{
        type: String,
        required: true,
        unique: true
    },
    
}, { timestamps : true })

const Model = mongoose.model('entregaEnvoval', LogisticaDoEnxovalSchema)
module.exports = Model