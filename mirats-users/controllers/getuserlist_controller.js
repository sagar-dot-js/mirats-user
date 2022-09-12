const { Users } = require("../models");
const { portalAccess } = require("../models");

const handelGetUsers = async (req, res) => {
  console.log(req.headers.authorisation);
  Users.findAll({}).then((result) => {
    res.send(result);
  });
};

module.exports = { handelGetUsers };
