const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Location = sequelize.define("Location", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    latitude: {
        type: DataTypes.DECIMAL(10, 7),
        allowNull: false,
    },

    longitude: {
        type: DataTypes.DECIMAL(10, 7),
        allowNull: false,
    }

});

module.exports = Location;