const { Sequelize } = require("sequelize");
let connection = new Sequelize("lectures", "root", "", {
    dialect : "mysql",
    host : "localhost"
});
let product = connection.define("Product", {
    Id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        allowNull : false
    },
    Title : {
        type : Sequelize.STRING
    },
    Price : {
        type : Sequelize.INTEGER
    }
})

exports.getProducts = function(){
    return new Promise(function(resolve, reject){
        connection.sync().then(result => console.log("Синхронизация прошла успешно"));
        product.findAll({raw : true}).then(products => {
            resolve(products);
        })
    })
}
exports.addProduct = function(title, price){
    return new Promise(function(resolve, reject){
        product.create({
            Title : title,
            Price : price
        }).then(res => resolve("Данные успешно добавлены"))
    })
}
exports.updateProduct = function(id, data){
    return new Promise(function(resolve, reject){
        product.update(data, {where : {
            Id : id
        }}).then(res => resolve("Данные успешно обновлены"));
    })
}
exports.deleteProduct = function(id){
    return new Promise(function(resolve, reject){
        product.destroy({where : {
            Id : id
        }}).then(res => resolve("Данные успешно удалены"));
    })
}
exports.getProduct = function(id){
    return new Promise(function(resolve, reject){
        connection.sync().then(result => console.log("Синхронизация прошла успешно"));
        product.findByPk(id).then(product => {
            resolve(product);
        })
    })
}