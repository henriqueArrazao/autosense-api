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
const prismaClient_1 = __importDefault(require("../src/utils/prismaClient"));
const client_1 = require("@prisma/client");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prismaClient_1.default.station.createMany({
            data: [
                {
                    id: 1,
                    name: 'Migrol Tankstelle',
                    address: 'Scheffelstrasse 16',
                    city: 'Zürich',
                    latitude: 47.3943939,
                    longitude: 8.52981,
                },
                {
                    id: 2,
                    name: 'Migrol Service',
                    address: 'Birmensdorferstrasse 517',
                    city: 'Zürich',
                    latitude: 47.367348257,
                    longitude: 8.4942242729,
                },
            ],
        });
        yield prismaClient_1.default.pump.createMany({
            data: [
                {
                    id: 10001,
                    fuelType: client_1.FuelType.benzin95,
                    price: 1.68,
                    available: true,
                    stationId: 1,
                },
                {
                    id: 10002,
                    fuelType: client_1.FuelType.benzin98,
                    price: 1.77,
                    available: false,
                    stationId: 1,
                },
                {
                    id: 10003,
                    fuelType: client_1.FuelType.diesel,
                    price: 1.75,
                    available: true,
                    stationId: 1,
                },
                {
                    id: 10004,
                    fuelType: client_1.FuelType.benzin95,
                    price: 1.72,
                    available: true,
                    stationId: 2,
                },
                {
                    id: 10005,
                    fuelType: client_1.FuelType.benzin98,
                    price: 1.79,
                    available: true,
                    stationId: 2,
                },
                {
                    id: 10006,
                    fuelType: client_1.FuelType.diesel,
                    price: 1.71,
                    available: false,
                    stationId: 2,
                },
            ],
        });
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prismaClient_1.default.$disconnect();
}));
