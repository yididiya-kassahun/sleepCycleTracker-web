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

  User.findOne({ where: { Email: email } })
    .then((user) => {
      if (!user) {
        res.redirect("/login");
      } 
      bcrypt
        .compare(password, user.Password)
        .then((doMatch) => {
          if (doMatch) {
            role
              .findAll()
              .then((userRole) => {
                if (userRole[0].id == user.role) {
                  req.session.isLoggedIn = true;
                  req.session.user = user;
                  req.session.save();
                  res.redirect("/admin");
               // console.log("User loggedin " + userRole[1].roleName);                   
                } else if (userRole[1].id == user.role) {
                  req.session.isLoggedIn = true;
                  req.session.user = user;
                  req.session.save();                     
                  res.redirect("/user");              
                } else {                       
                  res.redirect("/login");                    
                }                       
              })
              .catch((err) => {});
          } else {
            res.redirect("/login");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
