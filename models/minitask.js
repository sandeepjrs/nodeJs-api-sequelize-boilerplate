"use strict";

module.exports = function (sequelize, DataTypes) {
    var MiniTask = sequelize.define("MiniTask", {
        title: DataTypes.STRING
    });

    MiniTask.associate = function (models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        MiniTask.belongsTo(models.SubTask, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    }

    

    return MiniTask;
};
