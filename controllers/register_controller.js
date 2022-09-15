const { Users } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const handleRegister = async (req, res) => {
  if (req.body.email) {
    const result = await Users.findOne({ where: { email: req.body.email } });
    if (result?.email === req.body.email) {
      res.send("User Already Exist");
    } else {
      const salt = await bcrypt.genSalt();
      let key =
        "qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghhjkluiopasdfghjklzxcvbnmqweruiopasdfghjklzxcvbnmqwertyuiopuiopasdfghjklzxcvbnmqwertyuiopasdfghhjklasdfghhjkltyuiopasdfghhjklfeffefefefggwf";
      const token = jwt.sign(
        {
          bleazPortal: req.body.bleazPortal,
          jobportal: req.body.jobportal,
          accountPortal: req.body.accountPortal,
          admin: req.body.admin,
        },
        key
      );
      const hashpassword = await bcrypt.hash(req.body.password, salt);
      console.log(hashpassword);
      const result = await Users.create({
        ...req.body,
        password: hashpassword,
        jwtToken: token,
      });
      res.send(result);
    }
  } else {
    console.log("False");
    res.send("False");
  }
};

module.exports = handleRegister;
