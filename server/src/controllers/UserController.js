const { SALT_BCRYPT, TOKEN_SECRET, NODE_ENV, CLIENT_URL } = require("../config/env");
const User = require("../models/User.model");

const Board = require("../models/Board.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Column = require("../models/Column.model");
const Card = require("../models/Card.model");
const CardDetail = require("../models/CardDetail.model");

const registerController = async (req, res) => {
  try {
    const { email, password, firstname, lastname } = req.body;

    const userAlreadyExist = await User.findOne({ where: { email: email } });
    if (userAlreadyExist) {
      return res.status(400).json({ message: "user already exist" });
    } else {
      //enciptar password

      const hashpassword = await bcrypt.hash(password, parseInt(SALT_BCRYPT));
      const newUser = await User.create({
        email,
        password: hashpassword,
        firstname,
        lastname,
      });

      
  
      
      const defaultBoard = await Board.create({
        boardName: "my first board",
        UserId: newUser.dataValues.id,
        cover:"https://images.unsplash.com/photo-1682685797208-c741d58c2eff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQwODN8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNTYzMjk5OXw&ixlib=rb-4.0.3&q=80&w=400"
      });

    const todoColumn = await Column.create({
      columnName:"TASKS",
      orderColumn:0,
      BoardId:defaultBoard.dataValues.id
    })

    const todoTasks=["task 1 "," task 2"," task 3"]
    // id	"CardName"	"orderCard"	"createdAt"	"updatedAt"	"ColumnId"
    for (let index = 0; index < todoTasks.length; index++) {
      const createTodo=async()=>{
        const CardDetailNew=await  CardDetail.create({
        })
        await Card.create({
          CardName:todoTasks[index],
          ColumnId:todoColumn.dataValues.id,
          orderCard:index,
          CardDetailId:CardDetailNew.id
        })
      }
      createTodo()
    }
    
    
    const inProgressColumn = await Column.create({
      columnName:"In Progress",
      orderColumn:1,
      BoardId:defaultBoard.dataValues.id
    })
    const inProgressTask=["in progress 1","in progress 2","in progress 3"]

for (let index = 0; index < inProgressTask.length; index++) {
  const createTodo=async()=>{
    const CardDetailNew=await  CardDetail.create({
    })
    await Card.create({
      CardName:inProgressTask[index],
      ColumnId:inProgressColumn.dataValues.id,
      orderCard:index,
      CardDetailId:CardDetailNew.id
    })
  }
  createTodo()
}


    const CompleteColumn = await Column.create({
      columnName:"Complete",
      orderColumn:2,
      BoardId:defaultBoard.dataValues.id
    })
const completedTask=["task completed - 1 ","task completed - 2","task completed - 3 "]
for (let index = 0; index < completedTask.length; index++) {
  const createTodo=async()=>{
    const CardDetailNew=await  CardDetail.create({
    })
    await Card.create({
      CardName:completedTask[index],
      ColumnId:CompleteColumn.dataValues.id,
      orderCard:index,
      CardDetailId:CardDetailNew.id
    })
  }
  createTodo()
}



    const ImportantColumn = await Column.create({
      columnName:"importante",
      orderColumn:3,
      BoardId:defaultBoard.dataValues.id
    })

    const importantTask=["important data 1","important data 2 ","important data 3 "]
    for (let index = 0; index < importantTask.length; index++) {
      const createTodo=async()=>{
        const CardDetailNew=await  CardDetail.create({
        })
        await Card.create({
          CardName:importantTask[index],
          ColumnId:ImportantColumn.dataValues.id,
          orderCard:index,
          CardDetailId:CardDetailNew.id
        })
      }
      createTodo()
    }
    
    
      delete newUser.dataValues.password;
      res
        .status(200)
        .json({ message: "User created succeufully.", ...newUser.dataValues });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong : ( ", ...error });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await User.findOne({
      where: { email: email },
    });

    
    if (!findUser) {
      return res.status(400).json({ message: "User not found." });
    } else {
      //comparar contraseñas de la base de datos con la ingresada en el body

      const passwordIsMatch = await bcrypt.compare(
        password,
        findUser.dataValues.password
      );

      if (!passwordIsMatch) {
        return res.status(401).json({ message: "incorrect password." });
      } else {
        //aqui la logica para dar un token al usuario
        const token = await jwt.sign(
          {
            id: findUser.dataValues.id,
            email: findUser.dataValues.email,
            firstname: findUser.dataValues.firstname,
            lastname: findUser.dataValues.lastname,
          },
          TOKEN_SECRET,
          {
            expiresIn: "1d",
          }
        );



        if (NODE_ENV === "production") {
          // const oneHour = 3600000;
          res
          .cookie("token", token,{
            sameSite: "None",
            Secure: true,
       
            maxAge:  24 * 60 * 60 * 1000 // 1 día
          }).json({
              token,
              id: findUser.dataValues.id,
              email: findUser.dataValues.email,
              name: findUser.dataValues.name,
              lastname: findUser.dataValues.lastname,
              message:`welcome back ${findUser.dataValues.firstname}`
            });
            return
        } else {
          res.cookie("token", token).json({
            token,
            id: findUser.dataValues.id,
            email: findUser.dataValues.email,
            firtsname: findUser.dataValues.firstname,
            lastname: findUser.dataValues.lastname,
            message:`welcome back ${findUser.dataValues.firstname}`
          });
        }
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong :(" });
  }
};

const verifyToken = async (req, res) => {
  try {
    const token = req.cookies.token;
    jwt.verify(token, TOKEN_SECRET, async (err, decoded) => {
      
      
      if(!decoded){
        
        return  res.status(401).json({message:"Unauthorized"})
      
      }
      User.findByPk(decoded.id)
      .then((result)=>{

        if(result){

          req.user= {
            id: result.dataValues.id,
            email: result.dataValues.email,
            firstname: result.dataValues.firstname,
            lastname: result.dataValues.lastname,
          }
          return   res.status(200).json({
            id: result.dataValues.id,
            email: result.dataValues.email,
            firstname: result.dataValues.firstname,
            lastname: result.dataValues.lastname,
          });
        }else{
        return  res.status(401).json({message:"Unauthorized"})

        }
      })
      .catch((error)=>{
        console.log(error);
        return  res.status(401).json({message:"Unauthorized"})

      })
    

         


      
    });
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = {
  registerController,
  loginController,
  verifyToken,
};
