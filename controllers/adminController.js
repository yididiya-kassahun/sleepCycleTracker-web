const users = require("../models/user");
const quotes = require("../models/quotes");

exports.adminDashboard = (req, res, next) => {
  users
    .findAll()
    .then((users) => {
      res.render("Admin/adminDashboard", {
        pageTitle: "Admin Dashboard",
        users: users,
        path: "path",
      });
    })
    .catch({});
};

exports.quotesPage = (req, res, next) => {
  quotes
    .findAll()
    .then((result) => {
      res.render("Admin/postQuote", {
        pageTitle: "Post Quotes Dashboard",
        quotes: result,
        path: "path",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postQuotes = (req, res, next) => {
  const author = req.body.author;
  const quote = req.body.quote;

  quotes
    .create({
      quote: quote,
      author: author,
      adminID: 1,
    })
    .then((result) => {
      console.log(result);
      res.redirect("/quotesPage");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteUser = (req, res, next) => {
  const deleteUser = req.params.userID;
  users
    .findByPk(deleteUser)
    .then((User) => {
      User.destroy();
    })
    .then((result) => {
      console.log("User Deleted Successfully!");
      res.redirect("/admin");
    })
    .catch((err) => {
      console.log(err);
    });
};
