const express = require("express");
const router = express.Router();

const controller = require("../controller/userController");
const authController = require("../controller/authController");

router.post("/criar", controller.createUser);
router.get("/todos", controller.getAll);
router.put("/atualizar/:id", controller.updateUser);
router.delete("/deletar/:id", controller.deleteUser);
router.post('/login', authController.login);

module.exports = router;