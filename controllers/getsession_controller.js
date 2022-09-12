const { Session } = require("../models");
var jwt = require("jsonwebtoken");
const handelGetSession = async (req, res) => {
  console.log(req.headers.token);
  if (req.headers.token) {
    let token = req.headers.token;

    let key =
      "qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghhjkluiopasdfghjklzxcvbnmqweruiopasdfghjklzxcvbnmqwertyuiopuiopasdfghjklzxcvbnmqwertyuiopasdfghhjklasdfghhjkltyuiopasdfghhjklfeffefefefggwf";

    jwt.verify(token, key, function (err, decoded) {
      if (err) {
        res.send({ sessionActiveStatus: false });
        console.log(err);
      } else {
        res.send({ decoded: decoded, sessionActiveStatus: true });
      }
    });
  } else {
    console.log("No Token Found");
    res.send("No Token Found");
  }
};

module.exports = { handelGetSession };
