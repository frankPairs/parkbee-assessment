import { GarageAvailabilityAPI } from '../store/garages';

const availabilitiesMock: { [garageId: string]: GarageAvailabilityAPI } = {
  '6db25388-697d-4b6d-9d9b-8372c374b408': {
    garageId: '6db25388-697d-4b6d-9d9b-8372c374b408',
    garageName: 'ParkBee(26801): Zeeheld',
    name: 'Zeeheld',
    zoneNumber: 26801,
    availableSpaces: 15,
    capacity: 30,
  },
  'd14bc3e8-93ff-4e6e-be15-c7574252c5be': {
    garageId: 'd14bc3e8-93ff-4e6e-be15-c7574252c5be',
    garageName: 'ParkBee(26802): Botersloot',
    name: 'Botersloot',
    zoneNumber: 26802,
    availableSpaces: 30,
    capacity: 30,
  },
};

export { availabilitiesMock };
