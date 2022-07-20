
const mongoose = require('mongoose')

const cadastroClienteSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },

    socialName: {
        type: String,
        required: false
    },

    identity: {
        type: String,
        required: true,
        unique: true
    },

    telephone:  {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    address: {
        type: String,
        required: true
    },
    
    note: {
        type: String,
        required: true
    },

}, { timestamps : true })

const Model = mongoose.model('customerRegistration', cadastroClienteSchema)
module.exports = Model

