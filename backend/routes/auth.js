import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    
    const newUser = new User({
      userType: req.body.userType,
      userFullName: req.body.userFullName,
      admissionId: req.body.admissionId,
      employeeId: req.body.employeeId,
      age: req.body.age,
      dob: req.body.dob,
      gender: req.body.gender,
      address: req.body.address,
      mobileNumber: req.body.mobileNumber,
      email: req.body.email,
      password: req.body.password, // Save password as plaintext
      isAdmin: req.body.isAdmin,
    });

   
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const user = req.body.admissionId
      ? await User.findOne({ admissionId: req.body.admissionId })
      : await User.findOne({ employeeId: req.body.employeeId });

    if (!user) return res.status(404).json("User not found");

    if (req.body.password !== user.password) {
      return res.status(400).json("Wrong Password");
    }

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
});

export default router;
