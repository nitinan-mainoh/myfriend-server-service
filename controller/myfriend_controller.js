const Myfriend = require("../models/myfriend_model.js");

// ฟังก์ชั่นเพิ่มเพื่อน
const createMyfriend = async (req, res) => {
  try {
    const result = await Myfriend.create(req.body);
    res
      .status(201)
      .json({ message: "Myfriend Created Successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Failed to create myfriend" + error });
  }
};

// ฟังก์ชั่นแก้ไขข้อมูลเพื่อน
const updateMyfriend = async (req, res) => {
  try {
    const result = await Myfriend.update(req.body, {
      where: { myfriendId: req.params.myfriendId },
    });
    res
      .status(200)
      .json({ message: "Myfriend Updated Successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Failed to update myfriend" + error });
  }
};

// ฟังก์ชั่นลบเพื่อน
const deleteMyfriend = async (req, res) => {
  try {
    const result = await Myfriend.destroy({
      where: { myfriendId: req.params.myfriendId },
    });
    res
      .status(200)
      .json({ message: "Myfriend Deleted Successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete myfriend" + error });
  }
};

// ฟังก์ชั่นดึงข้อมูลเพื่อนของ User
const getMyfriendByUserId = async (req, res) => {
  try {
    const result = await Myfriend.findAll({
      where: { userId: req.params.userId },
    });
    // ตรวจสอบว่ามีข้อมูลหรือไม่
    if (!result) {
      res.status(404).json({ message: "Myfriend not found" });
    } else {
      res.status(200).json({ message: "Myfriend found", data: result });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get myfriend" + error });
  }
};

// ฟังก์ชั่นดึงข้อมูลเพื่อนของ User 1คน เงื่อนไข myfriendId
const getMyfriendById = async (req, res) => {
  try {
    const result = await Myfriend.findOne({
      where: { myfriendId: req.params.myfriendId },
    });
    // ตรวจสอบว่ามีข้อมูลหรือไม่
    if (!result) {
      res.status(404).json({ message: "Myfriend not found" });
    } else {
      res.status(200).json({ message: "Myfriend found", data: result });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get myfriend" + error });
  }
};

module.exports = {
  createMyfriend,
  updateMyfriend,
  deleteMyfriend,
  getMyfriendByUserId,
  getMyfriendById,
};
