const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Quotes = sequelize.define("quote", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quote: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
  },
  adminID: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
  },
});

module.exports = Quotes;
