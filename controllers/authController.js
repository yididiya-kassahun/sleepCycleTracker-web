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