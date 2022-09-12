var nodemailer = require("nodemailer");
const { Users } = require("../models");
const handleSendVerificationMail = async (req, res) => {
  if (req.headers.token) {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sagar.borude@miratsinsights.com",
        pass: "sender email password",
      },
    });

    await Users.findOne({ where: { jwtToken: req.headers.token } }).then(
      (result) => {
        if (result?.jwtToken === req.headers.token) {
          let userEmail = result?.email;

          let mailOptions = {
            from: "sagar.borude@miratsinsights.com",
            to: userEmail,
            subject: "Email verification",
            text: `http://localhost:3001/verifyLink/`,
            html: `<p> http://localhost:3001/api/v1/sendVeryficationMail/${result?.jwtToken} </p>`,
          };

          transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
              return log("Error occurs");
            }
            return res.send("Email Sent");
          });
        } else {
          res.send("Token not Match");
        }
      }
    );
  } else {
    res.send("Token Not Present");
  }
};

module.exports = { handleSendVerificationMail };
