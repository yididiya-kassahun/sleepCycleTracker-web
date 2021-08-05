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
    defaultValue:
      "No wonder Sleeping Beauty looked so good…she took long naps, never got old, and didn’t have to do anything but snore to get her Prince Charming",
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
    defaultValue: "Lincon Andrela",
  },
  adminID: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
  },
});

module.exports = Quotes;
