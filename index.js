const express = require("express");
const app = express();
const pug = require("pug");

app.set("view engine", "pug");

app.use("/dist", express.static(__dirname + "/dist"));

const router = require("./routes/router.js");

app.use("/", router);

app.listen(3001);