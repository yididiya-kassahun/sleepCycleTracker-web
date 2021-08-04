
exports.homeView = (req, res, next) => {
     res.render("home/home", {
        pageTitle: "Home Page",
        path: "homePage",
      });  
};