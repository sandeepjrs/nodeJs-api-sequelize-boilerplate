"use strict";

module.exports = function (sequelize, DataTypes) {
    var Seller = sequelize.define("Seller", {
        company_name : DataTypes.STRING,
        pincode: DataTypes.INTEGER,
        email: DataTypes.STRING,
        product: DataTypes.STRING,
    });

    Seller.associate = function (models) {
        Seller.hasMany(models.Order)
    }
    return Seller;
};
