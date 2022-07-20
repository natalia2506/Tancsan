const express = require("express");
const router = express.Router();

const controller = require("../controller/pedidoClienteController");
const authController = require("../controller/authController");

router.post('/login', authController.login);

const { checkAuth } = require("../middlewares/auth");

router.post("/create", checkAuth, controller.createOrder); // cadastrar pedido
router.get("/byid/:id", checkAuth, controller.findOrderById); // encontrar pedido por id
router.put("/update/:id", checkAuth, controller.updateRequest); // atualizar pedido
router.delete("/delete/:id", checkAuth, controller.deleteRequest); // deletar pedido

module.exports = router;

