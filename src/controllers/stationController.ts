import { Request, Response } from 'express';
import stationService from '../services/stationService';

export const getStations = async (req: Request, res: Response) => {
  try {
    const stations = await stationService.findAllStations();
    res.json(stations);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error fetching stations' });
  }
};

export const getStationById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const station = await stationService.findStationById(id);
    if (station) {
      res.json(station);
    } else {
      res.status(404).json({ message: 'Station not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error fetching station' });
  }
};

export const updateStation = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { name, pumps } = req.body;
    await stationService.updateStation(id, name, pumps);
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error updating station' });
  }
};

export const createStation = async (req: Request, res: Response) => {
  try {
    const { name, address, city, latitude, longitude, pumps } = req.body;
    await stationService.createStation({ name, address, city, latitude, longitude, pumps });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error creating station' });
  }
};

export const deleteStation = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await stationService.deleteStation(id);
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error deleting station' });
  }
};
