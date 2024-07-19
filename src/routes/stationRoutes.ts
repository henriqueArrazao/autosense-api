import { Router } from 'express';
import {
  getStations,
  getStationById,
  updateStation,
  createStation,
  deleteStation,
} from '../controllers/stationController';

const router = Router();

// prefix '/stations'
router.get('/', getStations);
router.get('/:id', getStationById);
router.put('/:id', updateStation);
router.post('/', createStation);
router.delete('/:id', deleteStation);

router.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

export default router;
