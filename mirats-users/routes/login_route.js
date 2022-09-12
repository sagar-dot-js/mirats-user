const express = require("express");
const { handleLogin } = require("../controllers/login_controller");

const router = express.Router();

// POST login route
router.post("/", handleLogin);

module.exports = router;
