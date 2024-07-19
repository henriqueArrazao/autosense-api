import prisma from '../src/utils/prismaClient';
import { FuelType } from '@prisma/client';

async function main() {
  await prisma.station.createMany({
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

  await prisma.pump.createMany({
    data: [
      {
        id: 10001,
        fuelType: FuelType.benzin95,
        price: 1.68,
        available: true,
        stationId: 1,
      },
      {
        id: 10002,
        fuelType: FuelType.benzin98,
        price: 1.77,
        available: false,
        stationId: 1,
      },
      {
        id: 10003,
        fuelType: FuelType.diesel,
        price: 1.75,
        available: true,
        stationId: 1,
      },
      {
        id: 10004,
        fuelType: FuelType.benzin95,
        price: 1.72,
        available: true,
        stationId: 2,
      },
      {
        id: 10005,
        fuelType: FuelType.benzin98,
        price: 1.79,
        available: true,
        stationId: 2,
      },
      {
        id: 10006,
        fuelType: FuelType.diesel,
        price: 1.71,
        available: false,
        stationId: 2,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
