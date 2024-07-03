const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST,DB_CONNECT, DB_PORT, DB_NAME } = require("./env");

// const sequelize = new Sequelize(
//   DB_NAME, DB_USER, DB_PASSWORD, {
//     host: DB_HOST,
//     dialect:"postgres",
//     logging: false,
//     dialectOptions: {
//       ssl: {
//         require: true, 
//         rejectUnauthorized: false 
//       }
//     } ,pool: {
//       max: 20, // Ajusta según tu necesidad
//       min: 5, // Ajusta según tu necesidad
//       acquire: 30000, // Milisegundos antes de que una solicitud de adquisición falle
//       idle: 10000 // Milisegundos antes de que una conexión inactiva sea liberada
//     }
//   }
// );
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'DB/database.sqlite'
});

async function dbConnect() {
  try {
    await sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");
    
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { sequelize, dbConnect };
