import express from 'express';
import {createResult,displayResults }from '../controllers/resultController.js';
import { protect } from '../middleware/auth.js';
const resultRoute= express.Router();

resultRoute.post("/create",protect,createResult);
resultRoute.get("/displayall",protect,displayResults);

export default resultRoute;