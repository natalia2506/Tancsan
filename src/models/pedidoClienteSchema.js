const mongoose = require('mongoose')

const PedidoEnxovalSchema = mongoose.Schema({

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
        required: true
    },

    pants:{
        type: Boolean,
        required: true
    },
    
    shortSleeveTShirt:{
        type: Boolean,
        required: true
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

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    cadastro: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "customerRegistration"
    },
    
}, { timestamps : true })

const Model = mongoose.model('pedidoEnxoval', PedidoEnxovalSchema)
module.exports = Model