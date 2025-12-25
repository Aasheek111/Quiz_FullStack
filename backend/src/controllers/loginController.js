import bcrypt from "bcryptjs";
import User from "../models/UserModel";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Field cannot be empty",
        sucess: false,
      });
    }

    const user = User.findOne({ email });

    token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    if (!user) {
      return res.status(401).json({
        message: "User not found",
        sucess: false,
      });
    }

    const isValid = bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({
        message: "Invalid Credential",
        sucess: false,
      });
    }

    return res.status(200).json({
      sucess: true,
      message: "Login Sucessful",
      token,
      user: {
        id: user._id,
        email: user.email,
        user: user.user,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      sucess: false,
      message: "Server Error",
    });
  }
}
