const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Admin = sequelize.define("admin", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
  },
  Email: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
  },
  Password: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
  },
});

module.exports = Admin;
