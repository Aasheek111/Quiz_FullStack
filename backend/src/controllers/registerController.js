import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
//this is for register
//user model ma user password ani email xa

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are Required",
      });
    }
    const isUser = await User.findOne({ email });

    if (isUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      password: hashedPass,
      email,
    });
    await newUser.save();

    const token = jwt.sign(
      {
        id: newUser.id,
        email: newUser.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    return res.status(200).json({
      sucess: true,
      message: "New user registration sucessfull!",
      user: {
        id: newUser._id,
        user: newUser.name,
        email: newUser.email,
      },
      token,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      message: "User Registratrion failed",
      sucess: false,
    });
  }
}
