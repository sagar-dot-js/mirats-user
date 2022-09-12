const express = require("express");
const handleRegister = require("../controllers/register_controller");

const router = express.Router();

router.post("/", handleRegister);

module.exports = router;
