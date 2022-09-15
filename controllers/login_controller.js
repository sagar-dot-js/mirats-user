const { Users, Login, Session } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const handleLogin = async (req, res, next) => {
  try {
    if (req.body.email) {
      await Users.findOne({ where: { email: req.body.email } }).then(
        (result) => {
          if (result?.email === req.body.email) {
            if (result?.auth_status === "1") {
              bcrypt.compare(
                req.body.password,
                result.password,
                (err, match) => {
                  if (match) {
                    let key =
                      "qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghhjkluiopasdfghjklzxcvbnmqweruiopasdfghjklzxcvbnmqwertyuiopuiopasdfghjklzxcvbnmqwertyuiopasdfghhjklasdfghhjkltyuiopasdfghhjklfeffefefefggwf";
                    const token = jwt.sign(
                      {
                        id: result.id,
                        bleazPortal: result.bleazPortal,
                        jobportal: result.jobportal,
                        accountPortal: result.accountPortal,
                        admin: result.admin,
                      },
                      key,
                      { expiresIn: "1m" }
                    );
                    Session.create({
                      user_id: result.id,
                      jwtToken: token,
                    });

                    res.send({
                      loginStatus: true,
                      jwtToken: token,
                    });

                    console.log("Login Successfully");
                  } else {
                    res.send("Invalid Username/Password");
                    console.log(match);
                  }
                }
              );
            } else {
              res.send({
                msg: "User is not Athorised",
                statusCode: false,
              });
            }
          } else {
            res.send({
              msg: "Email is Invalid",
              statusCode: false,
            });
          }
        }
      );
    } else {
      console.log("Filds are empty");
      res.send({
        msg: "Please Enter Email And password",
        statusCode: false,
      });
    }
  } catch (error) {
    console.log("we are in error block");
    next(error);
  }
};

module.exports = { handleLogin };
