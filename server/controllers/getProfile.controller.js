const { readData } = require("../Collection");

exports.getProfile = function (req, res) {
  console.log("inside get controller");
  readData("users", { userID: req.query.userID })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch(console.error);
};
