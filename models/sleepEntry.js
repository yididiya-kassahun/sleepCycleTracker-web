const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const sleepEntry = sequelize.define("sleepEntry", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  sleepTime: {
    type: "TIMESTAMP",
    allowNull: false,
    required: true,
  },
  wakeUpTime: {
    type: "TIMESTAMP",
    allowNull: false,
    required: true,
    defaultValue: "2021-06-16 18:06:39",
  },
  sleepDuration: {
    type: Sequelize.STRING,
    allowNull: false,
    required: true,
  },
  userID: {
    type: Sequelize.INTEGER,
    required: true,
    allowNull: false,
  },
});

module.exports = sleepEntry;
