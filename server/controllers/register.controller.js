const { insertData } = require("../Collection");

exports.register = function (req, res) {
  console.log("inside register controller");
  insertData(req.query, "users").then(console.log).catch(console.error);
  res.send("Got a POST request");
};
