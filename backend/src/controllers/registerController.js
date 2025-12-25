import User from "./models/UserModel";
import bcrypt, { hash } from "bcryptjs";
//this is for register
//user model ma user password ani email xa

export async function register(req, res) {
  try {
    const { user, email, password } = req.body;

    if (!user || !email || !password) {
      return res.status(400).json({
        sucess: false,
        message: "All fields are Required",
      });
    }
    const isUser = await User.findOne({ email });
    if (isUser) {
      return res.status(409).json({
        sucess: false,
        message: "User already exists",
      });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      user,
      password: hashedPass,
      email,
    });
    await newUser.save();

    return res.status(200).json({
      sucess: true,
      message: "New user registration sucessfull!",
      user: {
        id: newUser._id,
        user: newUser.user,
        email: newUser.email,
      },
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
        message:"User Registratrion failed",
        sucess:false
    })
  }
}
