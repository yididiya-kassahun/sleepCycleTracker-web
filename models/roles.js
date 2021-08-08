const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const role = sequelize.define("role", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  roleName: {
    type: Sequelize.STRING,
    unique:true
  },
});

// role.sync().then(() => {
//   role.create({
//     roleName: "admin",
//   });
//   role.create({
//     roleName: "user",
//   });
// });

module.exports = role;
