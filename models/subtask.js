"use strict";

module.exports = function (sequelize, DataTypes) {
    var SubTask = sequelize.define("SubTask", {
        title: DataTypes.STRING
    });

    SubTask.associate = function (models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        SubTask.belongsTo(models.Task, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    }

    SubTask.associate = (models)=>{
        SubTask.hasMany(models.MiniTask);

    }

    return SubTask;
};
