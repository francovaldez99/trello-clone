const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST,DB_CONNECT, DB_PORT, DB_NAME } = require("./env");

const sequelize = new Sequelize(
  DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect:"postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true, 
        rejectUnauthorized: false 
      }
    } ,pool: {
      max: 10, // Número máximo de conexiones en el pool
      min: 0, // Número mínimo de conexiones en el pool
      acquire: 30000, // Tiempo máximo (en milisegundos) para adquirir una conexión
      idle: 10000 // Tiempo máximo (en milisegundos) que una conexión puede estar inactiva en el pool
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
