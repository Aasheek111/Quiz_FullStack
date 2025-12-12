import "dotenv/config";
import cors from "cors";
import express from "express";
import { connectDB } from "./config/db.js";

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App running in http://localhost:${port}`);
});

connectDB();
