const { readData } = require("../Collection");

exports.signin = function (req, res) {
  console.log("inside signin controller");
  readData(
    "users",
    { email: req.query.email, password: req.query.password },
    { userID: 1 }
  )
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch(console.error);
};
