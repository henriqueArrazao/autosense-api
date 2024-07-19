import { Pump } from '@prisma/client';
import prisma from '../utils/prismaClient';

const findAllStations = () => {
  return prisma.station.findMany({
    select: {
      id: true,
      latitude: true,
      longitude: true,
    },
  });
};

const findStationById = (id: number) => {
  return prisma.station.findUnique({
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

const updateStation = async (id: number, name: string, pumps: Pick<Pump, 'fuelType' | 'price' | 'available'>[]) => {
  await prisma.station.update({
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
};

const createStation = (data: {
  name: string;
  address: string;
  city: string;
  latitude: number;
  longitude: number;
  pumps: Pick<Pump, 'fuelType' | 'price' | 'available'>[];
}) => {
  return prisma.station.create({
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

const deleteStation = (id: number) => {
  return prisma.station.delete({ where: { id } });
};

export default { findAllStations, findStationById, updateStation, createStation, deleteStation };
