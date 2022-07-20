const express = require("express");
const router = express.Router();

const controller = require("../controller/userController");
const authController = require("../controller/authController");

router.post('/login', authController.login);

router.get("/all", controller.getAll);
router.post("/create", controller.createUser);
router.put("/update/:id", controller.updateUser);
router.delete("/delete/:id", controller.deleteUser);

module.exports = router;