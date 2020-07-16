import { api } from '../../api';
import { GarageAPI, FullGarageAPI, Garage } from './types';

function getGaragesRequest(): Promise<Garage[]> {
  return api.get<GarageAPI[]>('/garages').then((res) => res.data.map(parseGarageAPIToGarage));
}

function getOneGarageRequest(garageId: string): Promise<Garage> {
  return api.get<FullGarageAPI>(`/garages/${garageId}`).then((res) => parseFullGarageAPIToGarage(res.data));
}

function parseGarageAPIToGarage(garageResponse: GarageAPI): Garage {
  return {
    id: garageResponse.id,
    name: 'null',
    fullName: garageResponse.garageName,
    zoneNumber: garageResponse.zoneNumber,
    doors: [],
    active: false,
    countryCode: garageResponse.countryCode,
  };
}

function parseFullGarageAPIToGarage(fullGarageResponse: FullGarageAPI): Garage {
  return {
    id: fullGarageResponse.garageId,
    name: fullGarageResponse.name,
    fullName: fullGarageResponse.garageName,
    zoneNumber: fullGarageResponse.zoneNumber,
    doors: fullGarageResponse.doors,
    active: fullGarageResponse.active,
    countryCode: fullGarageResponse.countryCode,
  };
}
export { getGaragesRequest, getOneGarageRequest };
