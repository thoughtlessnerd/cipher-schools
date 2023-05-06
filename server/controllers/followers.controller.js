const { readData } = require("../Collection");

exports.getFollowers = function (req, res) {
  readData("users", { userID: req.query.userID }, { followers: 1 })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch(console.error);
};
