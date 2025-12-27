import express from 'express';
import { ActionRoutes } from './routes/action.routes.js';

const app = express();

app.use(express.json());


app.use("/api", ActionRoutes);




export default app;
