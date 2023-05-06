const express = require("express");
const router = express.Router();

const signin_controller = require("../controllers/signin.controller");

router.get("/", signin_controller.signin);

module.exports = router;
