"use strict";

module.exports = function (sequelize, DataTypes) {
    var Order = sequelize.define("Order", {
        item: DataTypes.STRING,
        total: DataTypes.FLOAT 
    });

    Order.associate = function (models){
        Order.belongsTo(models.Customer)
    }

    Order.associate = function (models){
        Order.belongsTo(models.Seller)
    }

    return Order;
};
