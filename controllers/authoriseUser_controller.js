const { Users } = require("../models");

const handelAuthoriseUser = async (req, res) => {
  let token = req.headers["authorization"];

  const result = await Users.findOne({ jwtToken: token });
  if (result.jwtToken) {
    Users.update(
      { auth_status: true },
      { where: { email: result.email } }
    ).then((result) => {
      console.log("updated");
    });
  } else {
    console.log("Not Matchssss");
  }

  res.send(result);
};

module.exports = { handelAuthoriseUser };
