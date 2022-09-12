const { Users } = require("../models");
const verifyLink = (req, res) => {
  Users.findOne({ where: { jwtToken: req.params.token } }).then((result) => {
    if (result?.jwtToken === req.params.token) {
      Users.update(
        { emailVerfyed: true },
        {
          where: { jwtToken: result?.jwtToken },
        }
      ).then(() => {});

      res.send("Verification Suceesfully verified");
    } else {
      res.send("Verification Faild");
    }
  });
};

module.exports = { verifyLink };
