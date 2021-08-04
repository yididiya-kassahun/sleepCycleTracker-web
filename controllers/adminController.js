
exports.adminDashboard = (req, res, next) => {
     res.render("Admin/adminDashboard", {
        pageTitle: "Admin Dashboard",
        path: "path",
      });  
};