const bcrypt = require("bcryptjs");

const User = require("../models/user");
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
      User.findOne({ Email: email })
        .then((userEmail) => {
          if (userEmail) {
            console.log(userEmail);
            // res.redirect("/register");
          }
          return bcrypt.hash(password, 12).then((hashedPassword) => {
            console.log(hashedPassword);
            const user = new User({
              Name: fullName,
              Email: email,
              Password: hashedPassword,
              role: role[0].id,
            });
            return user.save();
          });
        })

        .then((result) => {
          console.log(result);
          res.redirect("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  role
    .findOne({ roleName: "user" })
    .then((roleID) => {
      console.log("here ======" + roleID);
    })
    .catch((err) => {});

  //console.log("here ======" + adminRoleID);

  User.findOne({ Email: email })
    .then((user) => {
      if (!user) {
        return res.redirect("/login");
      }
      //  .then((roleID) => {
      bcrypt
        .compare(password, user.Password)
        .then((doMatch) => {
          // console.log("here is role id =================");
          // if (doMatch && user.role == role.id) {
          //   return res.redirect("/user");
          // }
        })
        .catch((err) => {
          console.log(err);
        });
    })
    // .catch((err) => {
    //   console.log(err);
    //   res.redirect("/");
    // });
    .catch((err) => {
      console.log(err);
    });
};
