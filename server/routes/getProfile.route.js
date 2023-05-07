const express = require("express");
const router = express.Router();

const getProfile_controller = require("../controllers/getProfile.controller");

router.get("/", getProfile_controller.getProfile);

module.exports = router;
