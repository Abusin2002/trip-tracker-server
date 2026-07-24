const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.controller");

router.post("/", userController.createUser);
router.get("/:uuid", userController.getUser);

router.put("/:uuid", userController.updateUser);

module.exports = router;