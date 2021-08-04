const quote = require("../models/quotes");

exports.homeView = (req, res, next) => {
  quote
    .findAll({
      order: [["createdAt", "DESC"]],
    })
    .then((quotes) => {
      res.render("home/home", {
        pageTitle: "Home Page",
        quote:quotes[0],
        path: "homePage",
      });
    })
    .catch((err) => {});
};
