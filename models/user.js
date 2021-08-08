const Sequelize = require("sequelize");
const sequelize = require("../utils/database");
const bcrypt = require("bcryptjs");

const User = sequelize.define("user", {
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

// User.sync().then(() => {
//   bcrypt
//     .hash("1234", 12)
//     .then((hashedPassword) => {
//       User.create({
//         Name: "yididiya",
//         Email: "yididiya@gmail.com",
//         Password: hashedPassword,
//         role: 1,
//       });
//     })
    // .catch((err) => {});
//});

module.exports = User;
