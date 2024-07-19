"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stationController_1 = require("../controllers/stationController");
const router = (0, express_1.Router)();
// prefix '/stations'
router.get('/', stationController_1.getStations);
router.get('/:id', stationController_1.getStationById);
router.put('/:id', stationController_1.updateStation);
router.post('/', stationController_1.createStation);
router.delete('/:id', stationController_1.deleteStation);
router.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});
exports.default = router;
