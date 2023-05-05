const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const product = require("./routes/product.route"); // Imports routes for the products
const cors = require("cors");

let port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World YAYA");
});

app.use(cors());

app.use("/products", product);

app.listen(port, () => {
  console.log("We are live on " + port);
});
