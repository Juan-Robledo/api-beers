const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./network/routes")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes(app);

app.listen(3000);