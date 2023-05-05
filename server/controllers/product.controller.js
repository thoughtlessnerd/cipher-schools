const Product = require("../models/product.model");

//Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send({ message: "Greetings from the Test controller!" });
};
