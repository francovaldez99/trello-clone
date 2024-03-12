const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST,DB_CONNECT, DB_PORT, DB_NAME } = require("./env");

const sequelize = new Sequelize(
  DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect:"postgres",
    dialectOptions: {
      ssl: {
        require: true, 
        rejectUnauthorized: false 
      }
    }
  }
);
async function dbConnect() {
  try {
    await sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");
    
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { sequelize, dbConnect };
