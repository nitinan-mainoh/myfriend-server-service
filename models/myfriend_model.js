const Sequelize = require("sequelize"); // เรียกใช้งาน sequelize ตาม Concept Model ORM (Object Relational Mapping)
const sequelize = require("../database/database.js");

// สร้าง Model  ตามชื่อตารางใน Database แต่ให้ขึ้นต้นด้วยตัวใหญ่
const Myfriend = sequelize.define(
  "myfriend",
  {
    myfriendId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "myfriendId",
    },
    myfriendFullname: {
      type: Sequelize.STRING(200),
      allowNull: false,
      field: "myfriendFullname",
    },
    myfriendPhone: {
      type: Sequelize.STRING(30),
      allowNull: false,
      field: "myfriendPhone",
    },
    myfriendAge: {
      type: Sequelize.STRING(30),
      allowNull: false,
      field: "myfriendAge",
    },
    myfriendMajor: {
      type: Sequelize.STRING(20),
      allowNull: false,
      field: "myfriendMajor",
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "userId",
    },
  },
  {
    sequelize,
    tableName: "myfriend_tb",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Myfriend;