import express from 'express';
import { ActionController } from '../controllers/action.controller.js';
import audinLogger from '../middlewares/auditLogging.js';

const router = express.Router();

router.post("/action", 
    audinLogger,
    ActionController.CreateAction);



export const ActionRoutes = router;
