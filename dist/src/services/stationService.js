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
const prismaClient_1 = __importDefault(require("../utils/prismaClient"));
const findAllStations = () => {
    return prismaClient_1.default.station.findMany({
        select: {
            id: true,
            latitude: true,
            longitude: true,
        },
    });
};
const findStationById = (id) => {
    return prismaClient_1.default.station.findUnique({
        select: {
            id: true,
            name: true,
            address: true,
            city: true,
            pumps: {
                select: {
                    price: true,
                    available: true,
                    fuelType: true,
                },
            },
        },
        where: { id },
    });
};
const updateStation = (id, name, pumps) => __awaiter(void 0, void 0, void 0, function* () {
    yield prismaClient_1.default.station.update({
        where: { id },
        data: {
            name,
            pumps: {
                deleteMany: {},
                createMany: {
                    data: pumps.map((pump) => ({
                        fuelType: pump.fuelType,
                        price: pump.price,
                        available: pump.available,
                    })),
                },
            },
        },
    });
});
const createStation = (data) => {
    return prismaClient_1.default.station.create({
        data: {
            name: data.name,
            address: data.address,
            city: data.city,
            latitude: data.latitude,
            longitude: data.longitude,
            pumps: {
                create: data.pumps.map((pump) => ({
                    available: pump.available,
                    fuelType: pump.fuelType,
                    price: pump.price,
                })),
            },
        },
    });
};
const deleteStation = (id) => {
    return prismaClient_1.default.station.delete({ where: { id } });
};
exports.default = { findAllStations, findStationById, updateStation, createStation, deleteStation };
