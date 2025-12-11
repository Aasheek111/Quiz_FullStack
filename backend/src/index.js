import cors from 'cors'
import 'dotenv/config'
const express = require('express');
const { connectDB } = require('./config/db');
const app = express()
const port = 3000;
app.use(cors());
app.use (express.json());



app.get('/', (req, res) => {
  res.send('Hello World!')
})




app.listen(port, () => {
  console.log(`App running in http://localhost:${port}`)
})
connectDB();