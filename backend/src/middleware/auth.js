import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({
      message: "No tokens",
    });
  }

  try {
const token = auth.split(" ")[1];
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(401).json({ message: "Error in token" });
  }
};
