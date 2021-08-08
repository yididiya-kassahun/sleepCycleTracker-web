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
      } else {
        res.render("home/home", {
          pageTitle: "Home Page",
          quote: {
            quote:
              "Happiness is waking up, looking at the clock and finding that you still have two hours left to sleep",
              author: "Evan Peter",
          },
          path: "homePage",
        });
      }
    })
    .catch((err) => {});
};
