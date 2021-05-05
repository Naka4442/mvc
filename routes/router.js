const express = require("express");
const controller = require("../controllers/controller.js");

const bodyParser = require("body-parser");

const urlEncodedParser = bodyParser.urlencoded({extended : false});

const router = express.Router();

router.use("/home", controller.home);
router.use("/products", controller.products);
router.use("/addProducts", urlEncodedParser ,controller.addProducts);
router.use("/updateProduct", urlEncodedParser ,controller.updateProduct);
router.use("/deleteProduct", urlEncodedParser, controller.deleteProduct);
router.use("/", controller.home);

module.exports = router;