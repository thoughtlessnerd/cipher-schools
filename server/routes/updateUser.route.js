const express = require("express");
const router = express.Router();

const updateUser_controller = require("../controllers/updateUser.controller");

router.put("/", updateUser_controller.updateUser);

module.exports = router;
