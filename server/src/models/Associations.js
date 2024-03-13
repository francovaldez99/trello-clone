const User = require("./User.model");
const Project = require("./Project.model");
const Board = require("./Board.model");
const Column = require("./Column.model");
const Card = require("./Card.model");
const CardDetail = require("./CardDetail.model");

function defineAssociations() {
  try {
    //asociacion uno a muchos : un usuario puede tener muchos Dashboard
    // User.hasMany(Project);
    // Project.belongsTo(User);
    //Asociacion un Dashboard puede tener muchos Boards

    User.hasMany(Board);
    Board.belongsTo(User);
    //Asociacion un Board puede tener muchas columnas
    Column.belongsTo(Board);
    Board.hasMany(Column);

    //Asociacion una columna puede tener muchos cards

    Card.belongsTo(Column);
    Column.hasMany(Card);

    //cada card tiene un CardDetail
    CardDetail.hasOne(Card);
    Card.belongsTo(CardDetail)
  
  } catch (error) {
    console.log(
      "🚀 ~ file: Associations.js:28 ~ defineAssociations ~ error:",
      error
    );
  }
}

module.exports = defineAssociations;
