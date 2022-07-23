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
router.get("/todosPedidos", checkAuth, controller.findAllOrder); //todos pedidos de clientes
router.get("/todos", checkAuth, controller.allTrousseau)  // todos os kits
router.get("/porId/:id", checkAuth, controller.trousseauById)//encontrar kit por id
router.post("/criar", checkAuth, controller.registerTrousseau) // cadastrar kit
router.put("/atualizar/:id", checkAuth, controller.updateTrousseau) // atualizar kit
router.delete("/deletar/:id", checkAuth, controller.deleteTrousseau) //deletar kit

module.exports = router
