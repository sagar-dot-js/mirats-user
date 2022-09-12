const { Users } = require("../models");

const handelPortalAccessPermetion = (req, res) => {
  if (!req.body.id) {
    res.send("Body is empty");
  } else {
    Users.update(
      {
        bleazPortal: true,
        jobportal: true,
        accountPortal: false,
        admin: true,
      },
      { where: { id: req.body.id } }
    ).then((result) => {
      res.send("updated");
    });
  }
};

module.exports = { handelPortalAccessPermetion };
