exports.adminDashboard = (req, res, next) => {
  res.render("Admin/adminDashboard", {
    pageTitle: "Admin Dashboard",
    path: "path",
  });
};

exports.postQuotes = (req, res, next) => {
  res.render("Admin/postQuote", {
    pageTitle: "Post Quotes Dashboard",
    path: "path",
  });
};
