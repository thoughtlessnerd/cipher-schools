const express = require("express");
const router = express.Router();

const register_controller = require("../controllers/register.controller");

router.post("/", register_controller.register);

module.exports = router;
