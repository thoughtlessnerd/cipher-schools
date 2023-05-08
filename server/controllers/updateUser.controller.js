const { updateData } = require("../Collection");

exports.updateUser = function (req, res) {
  console.log(req.query.userID);
  let query = {};
  let keys = Object.keys(req.query);
  for (let i = 0; i < keys.length; i++) {
    let data;
    try {
      data = JSON.parse(req.query[keys[i]]);
    } catch (error) {
      if (error) data = req.query[keys[i]];
    }
    query[keys[i]] = data;
  }

  updateData("users", { userID: req.query.userID }, query)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch(console.error);
};
