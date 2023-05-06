const express = require("express");
const router = express.Router();

const changePassword_controller = require("../controllers/changePassword.controller");

router.put("/", changePassword_controller.changePassword);

module.exports = router;
