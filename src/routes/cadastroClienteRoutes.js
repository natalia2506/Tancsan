const express = require("express");
const router = express.Router();

const controller = require("../controller/cadastroClienteController");
const authController = require("../controller/authController");

router.post('/login', authController.login);

const { checkAuth } = require("../middlewares/auth");

router.post("/create", checkAuth, controller.createCustomrs); //cadastrar cliente
router.get("/all", checkAuth, controller.allCustomrs); //todos clientes
router.get("/byid/:id", checkAuth, controller.customrsById); //encontrar cliente cadastrado por id
router.put("/update/:id", checkAuth, controller.updateCustomrs); //atualizar dado do cliente
router.delete("/delete/:id", checkAuth, controller.deleteCustomrs); //deletar cliente

module.exports = router;

