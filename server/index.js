const express = require("express");
const app = express(); // Imports routes for the products
const cors = require("cors");
const register = require("./routes/register.route");
const signin = require("./routes/signin.route");
const updateUser = require("./routes/updateUser.route");
const updateInterests = require("./routes/updateInterests.route");
const changePassword = require("./routes/changePassword.route");
const followers = require("./routes/followers.route");
const getProfile = require("./routes/getProfile.route");

let port = 8080;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World YAYA");
});

app.use("/register", register);

app.use("/signin", signin);

app.use("/updateUser", updateUser);

app.use("/updateInterests", updateInterests);

app.use("/changePassword", changePassword);

app.use("/followers", followers);

app.use("/getProfile", getProfile);

app.listen(port, () => {
  console.log("We are live on " + port);
});
