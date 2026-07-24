const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    gender: {
        type: DataTypes.ENUM("male", "female"),
        allowNull: false,
        // Default lets `sequelize.sync({ alter: true })` add this column to an
        // existing, non-empty `users` table without failing. New rows are
        // still required to pass an explicit gender at the service layer.
        defaultValue: "male",
    }

});

module.exports = User;