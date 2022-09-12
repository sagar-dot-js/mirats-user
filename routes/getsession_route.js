const express = require("express");
const { handelGetSession } = require("../controllers/getsession_controller");

const router = express.Router();

router.get("/", handelGetSession);

module.exports = router;
