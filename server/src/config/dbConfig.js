const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = require("./env");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/trello_clone`,
  { logging: false }
);
async function dbConnect() {
  try {
    await sequelize.sync({ force: true });
    console.log("Connection has been established successfully.");
    
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { sequelize, dbConnect };
