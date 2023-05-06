const express = require("express");
const router = express.Router();

const updateInterests_controller = require("../controllers/updateInterests.controller");

router.put("/", updateInterests_controller.updateInterests);

module.exports = router;
