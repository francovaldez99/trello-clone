const { sequelize } = require("./config/dbConfig");
const bcrypt = require("bcrypt");
const { SALT_BCRYPT } = require("./config/env");
const User = require("./models/User.model");
const Project = require("./models/Project.model");
const Board = require("./models/Board.model");
const Column = require("./models/Column.model");
const Card = require("./models/Card.model");
const CardDetail = require("./models/CardDetail.model");
const defineAssociations = require("./models/Associations");

async function seed() {
  try {
    defineAssociations();
    await sequelize.sync({ force: false });

    const existingUser = await User.findOne({ where: { email: "test@test.com" } });
    if (existingUser) {
      console.log("Test user already exists. Skipping seed.");
      process.exit(0);
    }

    const hashpassword = await bcrypt.hash("test1234", parseInt(SALT_BCRYPT));
    const user = await User.create({
      email: "test@test.com",
      password: hashpassword,
      firstname: "Test",
      lastname: "User",
    });

    const project1 = await Project.create({ projectName: "Project Alpha" });
    const project2 = await Project.create({ projectName: "Project Beta" });

    const board1 = await Board.create({
      boardName: "Development Sprint",
      UserId: user.id,
      cover: "https://images.unsplash.com/photo-1682685797208-c741d58c2eff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQwODN8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNTYzMjk5OXw&ixlib=rb-4.0.3&q=80&w=400",
    });

    const board2 = await Board.create({
      boardName: "Personal Goals",
      UserId: user.id,
      cover: "https://images.unsplash.com/photo-1682685797208-c741d58c2eff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTQwODN8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNTYzMjk5OXw&ixlib=rb-4.0.3&q=80&w=400",
    });

    const boardColumns = [
      {
        boardId: board1.id,
        columns: [
          {
            name: "To Do",
            order: 0,
            cards: ["Setup project structure", "Design database schema", "Create API endpoints"],
          },
          {
            name: "In Progress",
            order: 1,
            cards: ["Implement authentication", "Build UI components"],
          },
          {
            name: "Done",
            order: 2,
            cards: ["Initial planning", "Requirements gathering"],
          },
        ],
      },
      {
        boardId: board2.id,
        columns: [
          {
            name: "Goals",
            order: 0,
            cards: ["Learn a new language", "Read 20 books", "Exercise daily"],
          },
          {
            name: "Completed",
            order: 1,
            cards: ["Run a marathon", "Travel to Japan"],
          },
        ],
      },
    ];

    for (const boardData of boardColumns) {
      for (const colData of boardData.columns) {
        const column = await Column.create({
          columnName: colData.name,
          orderColumn: colData.order,
          BoardId: boardData.boardId,
        });

        for (let i = 0; i < colData.cards.length; i++) {
          const cardDetail = await CardDetail.create({ content: `Details for: ${colData.cards[i]}` });
          await Card.create({
            CardName: colData.cards[i],
            orderCard: i,
            ColumnId: column.id,
            CardDetailId: cardDetail.id,
          });
        }
      }
    }

    console.log("Seed completed successfully!");
    console.log(`User: test@test.com / test1234`);
    console.log(`Projects: ${project1.projectName}, ${project2.projectName}`);
    console.log(`Boards: ${board1.boardName}, ${board2.boardName}`);
  } catch (error) {
    console.error("Seed failed:", error);
  } finally {
    await sequelize.close();
    process.exit(0);
  }
}

seed();
