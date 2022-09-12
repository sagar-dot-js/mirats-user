module.exports = (sequelize, Datatype) => {
  const Session = sequelize.define("Session", {
    user_id: {
      type: Datatype.INTEGER,
    },
    jwtToken: {
      type: Datatype.STRING,
    },
  });
  return Session;
};
