import MockAdapter from 'axios-mock-adapter';

import { garagesMock, fullGaragesMock, delayAxiosResponse } from '../../../__mocks__';
import { api } from '../../api';
import { GarageAPI, FullGarageAPI, Garage } from './types';

const apiMock = new MockAdapter(api);

function getGaragesRequest(): Promise<Garage[]> {
  apiMock.onGet('/garages').reply(() => delayAxiosResponse<GarageAPI[]>(garagesMock));

  return api.get<GarageAPI[]>('/garages').then((res) => res.data.map(parseGarageAPIToGarage));
}

function getOneGarageRequest(garageId: string): Promise<Garage> {
  apiMock.onGet(`/garages/${garageId}`).reply(() => delayAxiosResponse<FullGarageAPI>(fullGaragesMock[garageId]));

  return api.get<FullGarageAPI>(`/garages/${garageId}`).then((res) => parseFullGarageAPIToGarage(res.data));
}

function parseGarageAPIToGarage(garageResponse: GarageAPI): Garage {
  return {
    id: garageResponse.id,
    name: garageResponse.name,
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
