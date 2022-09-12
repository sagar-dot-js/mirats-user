module.exports = (sequelize, Datatype) => {
  const Users = sequelize.define(
    "Users",
    {
      id: {
        type: Datatype.INTEGER,
        primaryKey: true,
      },
      jwtToken: {
        type: Datatype.STRING,
      },
      user_name: {
        type: Datatype.STRING,
      },
      email: {
        type: Datatype.STRING,
      },
      accountType: {
        type: Datatype.STRING,
      },
      auth_status: {
        type: Datatype.STRING,
      },
      password: {
        type: Datatype.STRING,
      },
      contact_number: {
        type: Datatype.STRING,
      },
      emailVerfyed: {
        type: Datatype.STRING,
      },
      bleazPortal: {
        type: Datatype.BOOLEAN,
      },

      jobportal: {
        type: Datatype.BOOLEAN,
      },
      accountPortal: {
        type: Datatype.BOOLEAN,
      },
      admin: {
        type: Datatype.BOOLEAN,
      },
    },
    {
      tableName: "Users",
      initialAutoIncrement: 100000,
    }
  );

  return Users;
};
