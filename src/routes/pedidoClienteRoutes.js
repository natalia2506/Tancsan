const express = require("express");
const router = express.Router();

const controller = require("../controller/pedidoClienteController");
const authController = require("../controller/authController");

router.post('/login', authController.login);

const { checkAuth } = require("../middlewares/auth");

router.post("/criar", checkAuth, controller.createOrder); // cadastrar pedido
router.get("/porId/:id", checkAuth, controller.findOrderById); // encontrar pedido por id
router.put("/atualizar/:id", checkAuth, controller.updateRequest); // atualizar pedido
router.delete("/deletar/:id", checkAuth, controller.deleteRequest); // deletar pedido

module.exports = router;

