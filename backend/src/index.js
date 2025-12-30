import "dotenv/config";
import cors from "cors";
import express from "express";
import { connectDB } from "./config/db.js";
import resultRoute from "./routes/resultsRoute.js";

import userRouter from "./routes/auth.js";

const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

app.use("/api/auth", userRouter);
app.use("/result", resultRoute);

app.listen(port, () => {
  console.log(`App running in http://localhost:${port}`);
});

connectDB();
