
exports.userDashboard = (req, res, next) => {
     res.render("User/userDashboard", {
        pageTitle: "User Dashboard",
        path: "path",
      });  
};