const { updateData } = require("../Collection");

exports.updateUser = function (req, res) {
  console.log(req.query.userID);
  updateData("users", { userID: req.query.userID }, req.query)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch(console.error);
};
