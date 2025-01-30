const Sequelize = require("sequelize"); // เรียกใช้งาน sequelize ตาม Concept Model ORM (Object Relational Mapping)
const sequelize = require("../database/database.js");

// สร้าง Model  ตามชื่อตารางใน Database แต่ให้ขึ้นต้นด้วยตัวใหญ่
const User = sequelize.define("user", {
  userId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "userId",
  },
  userFullname: {
    type: Sequelize.STRING(100),
    allowNull: false,
    field: "userFullname",
  },
  userEmail: {
    type: Sequelize.STRING(100),
    allowNull: false,
    field: "userEmail",
  },
  userName: {
    type: Sequelize.STRING(50),
    allowNull: false,
    field: "userName",
  },
  userPassword: {
    type: Sequelize.STRING(50),
    allowNull: false,
    field: "userPassword",
  },
},
{
    sequelize,
    tableName: "user_tb",
    freezeTableName: true,
    timestamps: false, 
  }
);

module.exports = User;
