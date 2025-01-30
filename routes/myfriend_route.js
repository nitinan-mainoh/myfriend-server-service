const myfriend_Ctrl = require("../controller/myfriend_controller.js");
const express = require("express");
const router = express.Router();

router.post("/create", myfriend_Ctrl.createMyfriend);
router.put("/update/:myfriendId", myfriend_Ctrl.updateMyfriend);
router.delete("/delete/:myfriendId", myfriend_Ctrl.deleteMyfriend);
router.get("/getByUserId/:userId", myfriend_Ctrl.getMyfriendByUserId);
router.get("/getById/:myfriendId", myfriend_Ctrl.getMyfriendById);

module.exports = router;
