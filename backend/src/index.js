import "dotenv/config";
import cors from "cors";
import express from "express";
import { connectDB } from "./config/db.js";
import { register } from "./controllers/RegisterController.js";

const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post('/api/register',register)

app.listen(port, () => {
  console.log(`App running in http://localhost:${port}`);
});

connectDB();
