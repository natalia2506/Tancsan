const logisticaEnxovalSchema = require('../models/logisticaDoEnxovalSchema')
const pedidoClienteSchema = require("../models/pedidoClienteSchema");

//encontrar pedido por item
const findByshortSleeveBodysuit = async (request, reponse ) => {
    try {
        const findRequest = await pedidoClienteSchema.find({
            shortSleeveBodysuit: request.query.shortSleeveBodysuit
        }).populate("cadastro")

        reponse.status(200).json(findRequest)
    } catch (error) {
        reponse.status(500).json({ message: error.message })
    }
};

const findBylongSleeveBodysuit = async (request, reponse ) => {
    try {
        const findRequest = await pedidoClienteSchema.find({
            longSleeveBodysuit: request.query.longSleeveBodysuit
        }).populate("cadastro")

        reponse.status(200).json(findRequest)
    } catch (error) {
        reponse.status(500).json({ message: error.message })
    }
};

const findBypants = async (request, reponse ) => {
    try {
        const findRequest = await pedidoClienteSchema.find({
            pants: request.query.pants
        }).populate("cadastro")

        reponse.status(200).json(findRequest)
    } catch (error) {
        reponse.status(500).json({ message: error.message })
    }
};

const findByshortSleeveTShirt = async (request, reponse ) => {
    try {
        const findRequest = await pedidoClienteSchema.find({
            shortSleeveTShirt: request.query.shortSleeveTShirt
        }).populate("cadastro")

        reponse.status(200).json(findRequest)
    } catch (error) {
        reponse.status(500).json({ message: error.message })
    }
};

const findBylongSleeveShirt = async (request, reponse ) => {
    try {
        const findRequest = await pedidoClienteSchema.find({
            longSleeveShirt: request.query.longSleeveShirt
        }).populate("cadastro")

        reponse.status(200).json(findRequest)
    } catch (error) {
        reponse.status(500).json({ message: error.message })
    }
};

const findBylongshortJumpsuit = async (request, reponse ) => {
    try {
        const findRequest = await pedidoClienteSchema.find({
            shortJumpsuit: request.query.shortJumpsuit
        }).populate("cadastro")

        reponse.status(200).json(findRequest)
    } catch (error) {
        reponse.status(500).json({ message: error.message })
    }
};

const findBylongSuit = async (request, reponse ) => {
    try {
        const findRequest = await pedidoClienteSchema.find({
            longSuit: request.query.longSuit
        }).populate("cadastro")

        reponse.status(200).json(findRequest)
    } catch (error) {
        reponse.status(500).json({ message: error.message })
    }
};

const findBysocks = async (request, reponse ) => {
    try {
        const findRequest = await pedidoClienteSchema.find({
            socks: request.query.socks
        }).populate("cadastro")

        reponse.status(200).json(findRequest)
    } catch (error) {
        reponse.status(500).json({ message: error.message })
    }
};

const findBycradle = async (request, reponse ) => {
    try {
        const findRequest = await pedidoClienteSchema.find({
            cradle: request.query.cradle
        }).populate("cadastro")

        reponse.status(200).json(findRequest)
    } catch (error) {
        reponse.status(500).json({ message: error.message })
    }
};


const findByblanket = async (request, reponse ) => {
    try {
        const findRequest = await pedidoClienteSchema.find({
            blanket: request.query.blanket
        }).populate("cadastro")

        reponse.status(200).json(findRequest)
    } catch (error) {
        reponse.status(500).json({ message: error.message })
    }
};

const findBybabyCarriagem = async (request, reponse ) => {
    try {
        const findRequest = await pedidoClienteSchema.find({
            babyCarriagem: request.query.babyCarriagem
        }).populate("cadastro")

        reponse.status(200).json(findRequest)
    } catch (error) {
        reponse.status(500).json({ message: error.message })
    }
};

const findByEmail = async (request, reponse ) => {
    try {
        const findRequest = await pedidoClienteSchema.find({
            email: request.query.email
        }).populate("cadastro")

        reponse.status(200).json(findRequest)
    } catch (error) {
        reponse.status(500).json({ message: error.message })
    }
};

// Todos pedidos 
const findAllOrder = async (request, response) => {
    try {
        const findRequest = await pedidoClienteSchema.find().populate("cadastro")
        response.status(200).json({
            message: "Lista de pedidos",
            findRequest
        })
        if(findRequest.length == 0) {
            return response.status(404).json({
                message: "Nenhum pedido encontrado."
            })
        }
    } catch (error) {
        response.status(500).json({message: error.message })
    }
};

// cadastro do kit
const registerTrousseau = async (request, response) =>{
    try {

        const newTrousseau  = new logisticaEnxovalSchema ({
           
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
            pedido: request.body.pedido,
            cadastro: request.body.cadastro,
            place: request.body.place,

        })
        const saveTrousseau  = await newTrousseau.save();
        response.status(201).json({
            "message": "Kit-enxoval cadastrado com sucesso:",
            saveTrousseau})
        
    } catch (error) {
        response.status(500).json({ message: error.message })   
    }
};

const allTrousseau = async (req, res) => {
    try {
        const trousseau  = await logisticaEnxovalSchema.find().populate(["pedido", "cadastro"]);
        res.status(200).json({
            message: "Lista de kits",
            trousseau 
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const trousseauById = async (request, response) => {
    try {
        const trousseau  = await logisticaEnxovalSchema.findById(request.params.id).populate(["pedido", "cadastro"])
  
        if(!trousseau) {
            return response.status(404).json({message: "Kit de enxoval não encontrado."})
        }
  
        response.status(200).json({
            message: "Kit-enxoval:",
            trousseau
        })
    } catch (error) {
        response.status(500).json({message: error.message })
    }
  };

const updateTrousseau  = async (request, response) => {
    try {

        const findTrousseau  = await logisticaEnxovalSchema.findById(request.params.id).populate(["pedido", "cadastro"]) 

        if(!findTrousseau){
            response.status(404).json({
                "mensagem": "id não encontrado"
            })
        }

        findTrousseau.shortSleeveBodysuit = request.body.shortSleeveBodysuit || findTrousseau.shortSleeveBodysuit
        findTrousseau.longSleeveBodysuit = request.body.longSleeveBodysuit || findTrousseau.longSleeveBodysuit
        findTrousseau.pants = request.body.pants || findTrousseau.pants
        findTrousseau.shortSleeveTShirt = request.body.shortSleeveTShirt || findTrousseau.shortSleeveTShirt
        findTrousseau.longSleeveShirt = request.body.longSleeveShirt || findTrousseau.longSleeveShirt
        findTrousseau.shortJumpsuit = request.body.shortJumpsuit || findTrousseau.shortJumpsuit
        findTrousseau.longSuit =  request.body. longSuit || findTrousseau.longSuit
        findTrousseau.socks = request.body.socks || findTrousseau.socks
        findTrousseau. cradle = request.body.cradle || findTrousseau.cradle
        findTrousseau.blanket = request.body.blanket || findTrousseau.blanket
        findTrousseau.babyCarriagem = request.body.babyCarriagem || findTrousseau.babyCarriagem
        findTrousseau.place = request.body.place || findTrousseau.place
      
        const saveTrousseau = await findTrousseau.save()
        
        response.status(200).json({
            "message": "Atualização do kit do enxoval realizada com sucesso:",
            saveTrousseau})

    } catch (error) {
        response.status(500).json({ message: error.message })
    }
};

const deleteTrousseau = async (request, response) => {
    try {
        const findTrousseau = await logisticaEnxovalSchema.findByIdAndDelete(request.params.id).populate(["pedido", "cadastro"])
    
        response.status(200).json({
            "message": "Kit-enxoval deletado com sucesso:",
            findTrousseau})
        
    } catch (error) {
        response.status(500).json({ message: error.message })
        
    }
}

module.exports = {

    findByshortSleeveBodysuit,
    findBylongSleeveBodysuit,
    findBypants,
    findByshortSleeveTShirt,
    findBylongSleeveShirt,
    findBylongshortJumpsuit,
    findBylongSuit,
    findBysocks,
    findBycradle,
    findByblanket,
    findBybabyCarriagem,
    findByEmail,
    findAllOrder,
    registerTrousseau,
    allTrousseau,
    trousseauById,
    updateTrousseau,
    deleteTrousseau
}