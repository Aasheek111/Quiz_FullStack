import express from 'express';
import {createResult,displayResults }from '../controllers/resultController.js';
const resultRoute= express.Router();

resultRoute.post("/create",createResult);
resultRoute.get("/displayall",displayResults);

export default resultRoute;