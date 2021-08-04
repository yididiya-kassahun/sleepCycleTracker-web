const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const role = sequelize.define("role", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  roleName: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
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
