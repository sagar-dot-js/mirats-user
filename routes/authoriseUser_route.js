const express = require("express");
const {
  handelAuthoriseUser,
} = require("../controllers/authoriseUser_controller");

const router = express.Router();

router.post("/", handelAuthoriseUser);

module.exports = router;
