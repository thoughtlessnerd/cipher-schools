const { readData } = require("../Collection");

exports.signin = function (req, res) {
  console.log("inside signin controller");
  readData("users", req.query)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch(console.error);
};
