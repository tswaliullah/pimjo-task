import express from 'express';
import { ActionController } from '../controllers/action.controller.js';
import audinLogger from '../middlewares/auditLogging.js';
import rateLimit from '../middlewares/rateLimiting.js';

const router = express.Router();

router.post("/action",
    audinLogger,
    ActionController.CreateAction);



export const ActionRoutes = router;
