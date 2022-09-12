var express = require("express");
var app = express();
app.use(express.json());
const cors = require("cors");
const { expressjwt: jwt } = require("express-jwt");
var jwks = require("jwks-rsa");
var jwtAuthz = require("express-jwt-authz");
var jwt_decode = require("jwt-decode");
// const checkReadDataPermissions = require("./permissions/checkReadDataPermissions");

var port = process.env.PORT || 3001;

let surveys = [
  {
    survey_name: "survey 2",
    total_cost: "$600",
    clientName: "Google India",
  },
  {
    survey_name: "survey 3",
    total_cost: "$200",
    clientName: "Facebook India",
  },
  {
    survey_name: "survey 4",
    total_cost: "$800",
    clientName: "Yahoo India",
  },
  {
    survey_name: "survey 5",
    total_cost: "$400",
    clientName: "Youtube India",
  },
];

// let checkPermitions = (req, res, next) => {
//   var token = req.headers.authorization;
//   var decoded = jwt_decode(token);

//   var decodedPermition = decoded.permissions[0];

//   console.log(decodedPermition);
//   if (decodedPermition === "readSurveys") {
//     console.log("Allow");
//     next();
//   } else {
//     console.log("User Dosent Have Read Permission");
//   }
// };

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-2kz3kfoy.us.auth0.com/.well-known/jwks.json",
  }),

  audience: "this is identifier",
  issuer: "https://dev-2kz3kfoy.us.auth0.com/",
  algorithms: ["RS256"],
});
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

app.use(jwtCheck);
app.use(cors());
app.get("/authorized", function (req, res) {
  var token = req.headers.authorization;
  res.send(surveys);
});
app.use(handleErrorMiddleware);

app.listen(port, () => {
  console.log(`Server is started on Port ${port}`);
});
