const cadastroClienteSchema = require("../models/cadastroClienteSchema");

const createCustomrs = async (request, response) => {
   
    try {
      const newClient = new cadastroClienteSchema({
        name: request.body.name,
        socialName: request.body.socialName,
        identity: request.body.identity,
        telephone: request.body.telephone,
        email: request.body.email,
        address: request.body.address,
        note: request.body.note
    })
    const saveClient = await newClient.save()
    response.status(201).json({
        "message": "Cliente cadastrado com sucesso:",
        saveClient})
    
    } catch (error) {
        response.status(500).json({ message: error.message })   
    }
};

const allCustomrs = async (request, response) => {
    cadastroClienteSchema.find(function (err, client) {
    if(err) {
      response.status(500).send({ message: err.message })
    }
      response.status(200).send(client)
  }) 
};

const customrsById = async (request, response) => {
    try {
        const client = await cadastroClienteSchema.findById(request.params.id)
  
        if(!client) {
            return response.status(404).json({message:"Cadastro de cliente não encontrado."})
        }
  
        response.status(200).json({
            message: "Cliente:",
            client
        })
    } catch (error) { 
        response.status(500).json({message: error.message })
    }
};

const updateCustomrs = async (request, response) => {
    try {

        const findClient = await cadastroClienteSchema.findById(request.params.id) 

        if(!findClient){
            response.status(404).json({
                "mensagem": "id não encontrado"
            })
        }

        findClient.name = request.body.name || findClient.name
        findClient.socialName = request.body.socialName || findClient.socialName
        findClient.identity = request.body.identity || findClient.identity
        findClient.telephone = request.body.telephone || findClient.telephone
        findClient.email = request.body.email || findClient.email
        findClient.address = request.body.address || findClient.address
        findClient.note = request.body.note || findClient.note
        
        
        const saveClient = await findClient.save()
        
        response.status(200).json({
            "message": "Atualização de dados do cliente realizada com sucesso:",
            saveClient})

    } catch (error) {
        response.status(500).json({ message: error.message })
    }
};


const deleteCustomrs = async (request, response) => {
    try {
        const findClient = await cadastroClienteSchema.findByIdAndDelete(request.params.id) 

        response.status(200).json({
            "message": "Cliente deletado com sucesso:",
            findClient})
        
    } catch (error) {
        response.status(500).json({ message: error.message })
        
    }
};

module.exports = {
    createCustomrs,
    allCustomrs,
    customrsById,
    updateCustomrs,
    deleteCustomrs
};