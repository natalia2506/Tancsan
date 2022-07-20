const express = require("express")
const router = express.Router()

const controller = require('../controller/logisticaEnxovalController');
const authController = require("../controller/authController");


router.post('/login', authController.login);

const { checkAuth } = require("../middlewares/auth");

router.get("/shortSleeveBodysuit", checkAuth, controller.findByshortSleeveBodysuit) // busca por cada item do pedido
router.get("/longSleeveBodysuit", checkAuth,controller.findBylongSleeveBodysuit)
router.get("/pants", checkAuth, controller.findBypants)
router.get("/shortSleeveTShirt", checkAuth, controller.findByshortSleeveTShirt)
router.get("/longSleeveShirt", checkAuth, controller.findBylongSleeveShirt)
router.get("/longshortJumpsuit", checkAuth, controller.findBylongshortJumpsuit)
router.get("/longSuit", checkAuth, controller.findBylongSuit)
router.get("/socks", checkAuth, controller.findBysocks)
router.get("/cradle", checkAuth, controller.findBycradle)
router.get("/blanket", checkAuth, controller.findByblanket)
router.get("/babyCarriagem", checkAuth, controller.findBybabyCarriagem)
router.get("/email", checkAuth, controller.findByEmail)// encontrar pedido pelo email
router.get("/RequestAll", checkAuth, controller.findAllOrder); //todos pedidos de clientes
router.get("/all", checkAuth, controller.allTrousseau)  // todos os kits
router.get("/byid/:id", checkAuth, controller.trousseauById)//encontrar kit por id
router.post("/create", checkAuth, controller.registerTrousseau) // cadastrar kit
router.put("/update/:id", checkAuth, controller.updateTrousseau) // atualizar kit
router.delete("/delete/:id", checkAuth, controller.deleteTrousseau) //deletar kit

module.exports = router




// router.get("/all", checkAuth, controller.allCustomrs); //todos clientes

// router.post("/create",  checkAuth, controller.createCustomrs); //criar cliente

// router.put("/update/:id", checkAuth, controller.updateCustomrs); //alterar dados do cliente

// router.delete("/delete/:id", controller.deleteCustomrs); //deletar cliente