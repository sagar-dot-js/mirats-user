const express = require("express");
const {
  handelPortalAccessPermetion,
} = require("../controllers/portalAccessPermetion_controller");
const router = express.Router();
router.post("/", handelPortalAccessPermetion);

module.exports = router;
