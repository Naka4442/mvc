const model   = require("../models/model.js");

exports.home = function(req, res){
    res.render("home");
}
exports.products = function(req, res){
    model.getProducts().then(products => {
        console.log(products);
        res.render("products", {products : products});
    })
}
exports.addProducts = function(req, res){
    let title = req.body.Title;
    let price =  req.body.Price;
    model.addProduct(title, price).then(result => {
        res.send(result);
    })
}
exports.updateProduct = function(req, res){
    let id = req.body.Id;
    let data = {
        Title : req.body.Title,
        Price : req.body.Price
    }
    model.updateProduct(id, data).then(result => {
        res.send(result);
    })
}
exports.deleteProduct = function(req, res){
    let id = req.body.Id;
    model.deleteProduct(id).then(result => {
        res.send(result);
    })
}