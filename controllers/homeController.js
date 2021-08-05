const quote = require("../models/quotes");

exports.homeView = (req, res, next) => {
  quote
    .findAll({
      order: [["createdAt", "DESC"]],
    })
    .then((quotes) => {
      if (quotes) {
        res.render("home/home", {
          pageTitle: "Home Page",
          quote: quotes[0],
          path: "homePage",
        });
      }
      res.render("home/home", {
        pageTitle: "Home Page",
        quote: {
          quote:
            "A new study finds that irregular sleeping patterns including catch-up sleep",
          author: "Evan Peter",
        },
        path: "homePage",
      });
    })
    .catch((err) => {});
};
