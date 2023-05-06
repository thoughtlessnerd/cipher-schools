const express = require("express");
const router = express.Router();

const followers_controller = require("../controllers/followers.controller");

router.get("/", followers_controller.getFollowers);

module.exports = router;
