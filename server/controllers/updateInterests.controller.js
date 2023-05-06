const { updateData } = require("../Collection");

exports.updateInterests = function (req, res) {
  console.log(req.query.userID);
  updateData(
    "users",
    { userID: req.query.userID },
    { interests: req.query.interests }
  )
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch(console.error);
};
