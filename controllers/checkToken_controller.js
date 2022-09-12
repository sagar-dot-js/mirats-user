var jwt = require("jsonwebtoken");

const handelCheckToken = (req, res) => {
  console.log(req.headers.sessiontoken);
};
