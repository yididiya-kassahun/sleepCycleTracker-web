const sleepEntry = require("../models/sleepEntry");

var moment = require("moment");

exports.userDashboard = (req, res, next) => {
  sleepEntry
    .findAll()
    .then((sleepEntry) => {
      res.render("User/userDashboard", {
        pageTitle: "User Dashboard",
        path: "path",
        sleepEntries: sleepEntry,
        duration: sleepEntry[0].sleepDuration,
        userName: req.session.user.Name,
        moment: moment,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.chartData = (req, res, next) => {
  sleepEntry
    .findAll()
    .then((sleepEntry) => {
        res.json({
         data:sleepEntry
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addSleepEntry = (req, res, next) => {
  const sleepTime = req.body.sleepTime;
  const wakeupTime = req.body.sleepTime;
  // const sleepDuration = req.body.sleepDuration;
  const sleepDuration = moment()
    .subtract(wakeupTime - sleepTime)
    .hours();
  sleepEntry
    .create({
      sleepTime: sleepTime,
      wakeupTime: wakeupTime,
      sleepDuration: sleepDuration,
      userID: req.session.user.id,
    })
    .then((result) => {
      console.log("Sleep entry added successfully");
      res.redirect("/user");
    })
    .catch((err) => {
      console.log(err);
    });
};
