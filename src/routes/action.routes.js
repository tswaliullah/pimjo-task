import express from 'express';
import { ActionController } from '../controllers/action.controller.js';

const router = express.Router();

router.post("/action", ActionController.CreateAction);


console.log("routes loaded");

export const ActionRoutes = router;
