const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./network/routes");
const dbConnect = require("./db");
const cors = require("cors");


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

dbConnect();
routes(app);

app.listen(process.env.PORT || 3000);