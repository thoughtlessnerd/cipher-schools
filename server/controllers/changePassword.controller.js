const { updateData } = require("../Collection");

exports.changePassword = function (req, res) {
  console.log(req.query.userID);
  updateData(
    "users",
    { userID: req.query.userID },
    { password: req.query.password }
  )
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch(console.error);
};
