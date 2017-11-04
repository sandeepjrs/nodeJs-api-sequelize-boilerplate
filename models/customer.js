"use strict";

module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        phone_number: DataTypes.INTEGER,
        email: DataTypes.STRING,
        product: DataTypes.STRING,
    });

    Customer.associate = function (models) {
        Customer.hasMany(models.Order)
    }
    return Customer;
};
