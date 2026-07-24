const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mysql",

        logging: false,

        define: {
            timestamps: true,
            freezeTableName: true,
        },

        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
);

const connectDatabase = async () => {
    try {
        await sequelize.authenticate();

        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("✅ MySQL Connected Successfully");
        console.log(`📦 Database : ${process.env.DB_NAME}`);
        console.log(`🖥️  Host     : ${process.env.DB_HOST}:${process.env.DB_PORT}`);
        console.log(`👤 User      : ${process.env.DB_USER}`);
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

        await sequelize.sync({ alter: true });

        console.log("✅ Database Synced Successfully");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

    } catch (error) {
        console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.error("❌ Database Connection Failed");
        console.error(error.message);
        console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        process.exit(1);
    }
};

module.exports = {
    sequelize,
    connectDatabase,
};