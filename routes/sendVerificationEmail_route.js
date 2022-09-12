const express = require("express");
const {
  handleSendVerificationMail,
} = require("../controllers/sendVerificationEmail_controller");
const { verifyLink } = require("../controllers/verifyLink_controller");
const router = express.Router();

router.post("/", handleSendVerificationMail);
router.get("/:token", verifyLink);

module.exports = router;
