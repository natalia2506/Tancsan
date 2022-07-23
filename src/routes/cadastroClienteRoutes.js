const express = require("express");
const router = express.Router();

const controller = require("../controller/cadastroClienteController");
const authController = require("../controller/authController");

router.post('/login', authController.login);

const { checkAuth } = require("../middlewares/auth");

router.post("/criar", checkAuth, controller.createCustomrs); //cadastrar cliente
router.get("/todos", checkAuth, controller.allCustomrs); //todos clientes
router.get("/porId/:id", checkAuth, controller.customrsById); //encontrar cliente cadastrado por id
router.put("/atualizar/:id", checkAuth, controller.updateCustomrs); //atualizar dado do cliente
router.delete("/deletar/:id", checkAuth, controller.deleteCustomrs); //deletar cliente

module.exports = router;

