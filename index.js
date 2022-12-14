const express = require("express");
const cors = require("cors");

const app = express();
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.engine("html", require("ejs").renderFile);
// const port = process.env.PORT || 3001;
const db = require("./models");
const loginRoutes = require("./routes/login_route");
const registerRoutes = require("./routes/regsiter_route");
const getUserListroutes = require("./routes/getuserlist_route");
const getSessionList = require("./routes/getsession_route");
const sendVeryficationMail = require("./routes/sendVerificationEmail_route");
const authonticateUser = require("./routes/authoriseUser_route");
const assingPortalAccess = require("./routes/portalAccessPermetion_route");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server Is running");
});

app.use("/api/v1/login", loginRoutes);
app.use("/api/v1/register", registerRoutes);
app.use("/api/v1/getUserList", getUserListroutes);
app.use("/api/v1/findSession", getSessionList);
app.use("/api/v1/sendVeryficationMail", sendVeryficationMail);
app.use("/api/v1/authonticateUser", authonticateUser);
app.use("/api/v1/portalAccess", assingPortalAccess);

const handleErrorMiddleware = (err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMsg = err.message || "Something went wrong";

  res.status(errStatus).json({
    success: false,
    message: errMsg,
    status: errStatus,
    stack: err.stack,
  });
};

app.use(handleErrorMiddleware);

db.sequelize.sync().then((req) => {
  console.log("DB Sync");
  app.listen(3001, () => {
    console.log(`Server Started On Port 3001 `);
  });
});
