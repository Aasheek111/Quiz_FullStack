import express from 'express';
import createResult from '../controllers/resultController.js';
const resultRoute= express.Router();

resultRoute.post("/create",createResult);

export default resultRoute;