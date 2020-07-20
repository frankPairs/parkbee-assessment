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
    location: null,
    photos: [],
    isPayPerMinute: false,
    isReservable: false,
    isPrepaid: false,
    isSuspended: false,
    hasBarrier: false,
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
    location: {
      street: fullGarageResponse.streetAddress,
      postalCode: fullGarageResponse.postalCode,
      city: fullGarageResponse.city,
    },
    photos: fullGarageResponse.photos.map((photo) => ({
      name: photo.description,
      urls: photo.urls.map((url) => url.url),
    })),
    isPayPerMinute: fullGarageResponse.isPayPerMinute,
    isReservable: fullGarageResponse.isReservable,
    isPrepaid: fullGarageResponse.isPrepaid,
    isSuspended: fullGarageResponse.isSuspended,
    hasBarrier: fullGarageResponse.hasBarrier,
  };
}
export { getGaragesRequest, getOneGarageRequest };
