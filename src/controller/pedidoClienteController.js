const pedidoClienteSchema = require("../models/pedidoClienteSchema");

const createOrder = async (request, response) => {
   
    try {
      const newRequest = new pedidoClienteSchema({

        shortSleeveBodysuit: request.body.shortSleeveBodysuit,
        longSleeveBodysuit: request.body.longSleeveBodysuit,
        pants: request.body.pants,
        shortSleeveTShirt: request.body.shortSleeveTShirt,
        longSleeveShirt: request.body.longSleeveShirt,
        shortJumpsuit: request.body.shortJumpsuit,
        longSuit: request.body. longSuit,
        socks: request.body.socks,
        cradle: request.body.cradle,
        blanket: request.body.blanket,
        babyCarriagem: request.body.babyCarriagem,
        email: request.body.email,
        cadastro: request.body.cadastro
    })

    const orderExists = await pedidoClienteSchema.findOne({email: request.body.email})
    if(orderExists) {
      return response.status(400).json({
        error: " Existe um pedido com  o e-mail cadastrado"
      })
    }

    const saveOrder = await newRequest.save()
    response.status(201).json({
        "message": "Pedido cadastrado com sucesso:",
        saveOrder})
    
  } catch (error) {
    response.status(500).json({ message: error.message })   
  }
};

const findOrderById = async (request, response) => {
  try {
      const findRequest = await pedidoClienteSchema.findById(request.params.id).populate("cadastro")

      if(!findRequest) {
          return response.status(404).json({message: "Cadastro não encontrado."})
      }

      response.status(200).json({
          message: "Pedido:",
          findRequest
      })
  } catch (error) {
      response.status(500).json({ message: error.message })
  }
};

const updateRequest  = async (request, response) => {
  try {
      const findRequest  = await pedidoClienteSchema.findById(request.params.id).populate("cadastro")

      if(!findRequest){
          response.status(404).json({
              "mensagem": "id não encontrado"
          })
      }

      findRequest.shortSleeveBodysuit = request.body.shortSleeveBodysuit || findRequest.shortSleeveBodysuit
      findRequest.longSleeveBodysuit = request.body.longSleeveBodysuit || findRequest.longSleeveBodysuit
      findRequest.pants = request.body.pants || findRequest.pants
      findRequest.shortSleeveTShirt = request.body.shortSleeveTShirt || findRequest.shortSleeveTShirt
      findRequest.longSleeveShirt = request.body.longSleeveShirt || findRequest.longSleeveShirt
      findRequest.shortJumpsuit = request.body.shortJumpsuit || findRequest.shortJumpsuit
      findRequest.longSuit =  request.body. longSuit || findRequest.longSuit
      findRequest.socks = request.body.socks || findRequest.socks
      findRequest. cradle = request.body.cradle || findRequest.cradle
      findRequest.blanket = request.body.blanket || findRequest.blanket
      findRequest.babyCarriagem = request.body.babyCarriagem || findRequest.babyCarriagem
      findRequest.email = request.body. email || findRequest.email
      
      const saveRequest = await findRequest.save()
      
      response.status(200).json({
          "message": "Atualização do pedido realizada com sucesso:",
          saveRequest})

  } catch (error) {
      response.status(500).json({ message: error.message })
  }
};

const deleteRequest = async (request, response) => {
  try {
      const findRequest = await pedidoClienteSchema.findByIdAndDelete(request.params.id).populate("cadastro")

      response.status(200).json({
          "message": "Pedido deletado com sucesso:",
          findRequest})
      
  } catch (error) {
      response.status(500).json({ message: error.message }) 
  }
};
 
module.exports = {
  createOrder,
  findOrderById,
  updateRequest,
  deleteRequest
};