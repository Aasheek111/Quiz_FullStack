import axios from "axios";
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";

export const googleLogin = async (req, res) => {
  try {
    const { access_token } = req.body;

    // Get user info from Google
    const googleRes = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    // {
    //   "sub": "104285288484456463967",
    //   "name": "Technical Aashik",
    //   "given_name": "Technical",
    //   "family_name": "Aashik",
    //   "picture": "https://lh3.googleusercontent.com/a/ACg8ocIFb7qw_QZy-wAYJGEn1I1w3nsgFhqdGNqIq0gknxsIg0GdzDJ4=s96-c",
    //   "email": "technicalaashik111@gmail.com",
    //   "email_verified": true
    // }

    console.log(access_token);
    const { email, name, picture } = googleRes.data;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        email,
        name,
        avatar: picture,
        authProvider: "google",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      success: true,
      token,
      user,
    });
  } catch (err) {
    res.status(401).json({ message: "Google authentication failed" });
  }
};
