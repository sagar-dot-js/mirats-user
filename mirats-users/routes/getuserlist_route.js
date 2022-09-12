const express = require("express");
const { handelGetUsers } = require("../controllers/getuserlist_controller");
const router = express.Router();

router.get("/", handelGetUsers);

module.exports = router;
