const User = require("../models/user_model.js");

// ฟังก์ชั่นสร้าง User
const createUser = async (req, res) => {
  try {
    const result = await User.create(req.body);
    res
      .status(201)
      .json({ message: "User Created Successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Failed to create user" + error });
  }
};

// ฟังก์ชั่นตรวจสอบการเข้าใช้งานของ User
const loginUser = async (req, res) => {
  try {
    const result = await User.findOne({
      where: {
        userName: req.params.userName,
        userPassword: req.params.userPassword,
      },
    });
    if (result) {
      res.status(200).json({ message: "Login Success", data: result });
    } else {
      res.status(404).json({ message: "Login Failed : User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to login" + error });
  }
};

module.exports = {
  createUser,
  loginUser,
};
