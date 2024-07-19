import express from 'express';
import { authMiddleware } from './middleware/auth';
import stationRoutes from './routes/stationRoutes';

const app = express();

app.use(express.json());
app.use(authMiddleware);

app.use('/stations', stationRoutes);

export default app;
