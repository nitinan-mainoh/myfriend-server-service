const user_Ctrl = require("../controller/user_controller.js");
const express = require("express");
const router = express.Router();

router.post("/create", user_Ctrl.createUser);
router.get("/login/:userName/:userPassword", user_Ctrl.loginUser);

module.exports = router;
