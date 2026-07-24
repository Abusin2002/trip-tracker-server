const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Trip = sequelize.define("Trip", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    tripCode: {
        type: DataTypes.STRING(10),
        unique: true,
        allowNull: false,
    },

    tripName: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }

});

module.exports = Trip;