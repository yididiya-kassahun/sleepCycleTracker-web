const user = require("../models/user");
const role = require("../models/roles");

exports.loginView = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login Page",
    path: "homePage",
  });
};

exports.registerView = (req, res, next) => {
  res.render("auth/register", {
    pageTitle: "Register Page",
    path: "Register",
  });
};

exports.postRegister = (req, res, next) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const password = req.body.password;
  const confPassword = req.body.confrimPassword;

  role
    .findAll({ where: { roleName: "user" } })
    .then((role) => {
      user
        .create({
          Name: fullName,
          Email: email,
          Password: password,
          role: role[0].id,
        })
        .then((result) => {
          console.log(result);
          res.redirect("/register");
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
