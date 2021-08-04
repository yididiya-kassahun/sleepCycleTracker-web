const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const MysqlStore = require("express-mysql-session")(session);
const sequelize = require("./utils/database");

// -----| models
// const adminModel = require("./models/admin");
// const addPolicy = require("./models/addPolicy");

// -----| Routes
const adminRoute = require("./routes/admin");
const userRoute = require("./routes/user");
const homeRoute = require("./routes/home");

const app = express();
const store = new MysqlStore({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "sleepTrackerDB",
});

// Setup View template engine
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

// Set Routing
app.use(adminRoute);
app.use(userRoute);
app.use(homeRoute);

// Using sequelizer for ORM database - mysql
//sequelize
  //.sync({ force: true }) //override the existing table
  //.sync()
 // .then((result) => {
    app.listen(3000);
 // })
//   .catch((err) => {
//     console.log(err);
//   });

