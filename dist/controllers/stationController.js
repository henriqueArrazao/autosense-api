"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStation = exports.createStation = exports.updateStation = exports.getStationById = exports.getStations = void 0;
const stationService_1 = __importDefault(require("../services/stationService"));
const getStations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const stations = yield stationService_1.default.findAllStations();
        res.json(stations);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error fetching stations' });
    }
});
exports.getStations = getStations;
const getStationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const station = yield stationService_1.default.findStationById(id);
        if (station) {
            res.json(station);
        }
        else {
            res.status(404).json({ message: 'Station not found' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error fetching station' });
    }
});
exports.getStationById = getStationById;
const updateStation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { name, pumps } = req.body;
        yield stationService_1.default.updateStation(id, name, pumps);
        res.status(204).end();
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error updating station' });
    }
});
exports.updateStation = updateStation;
const createStation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, address, city, latitude, longitude, pumps } = req.body;
        yield stationService_1.default.createStation({ name, address, city, latitude, longitude, pumps });
        res.status(204).end();
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error creating station' });
    }
});
exports.createStation = createStation;
const deleteStation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield stationService_1.default.deleteStation(id);
        res.status(204).end();
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error deleting station' });
    }
});
exports.deleteStation = deleteStation;
