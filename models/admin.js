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
    unique: true,
  },
  Password: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
  },
  role: {
    type: Sequelize.INTEGER,
    allowNull: false,
    required: true,
  },
});

module.exports = Admin;
