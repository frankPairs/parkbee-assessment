import { delayAxiosResponse, availabilitiesMock } from '../../../__mocks__';
import { api, apiMock } from '../../api';
import { GarageAvailabilityAPI, GarageAvailability } from './types';

function getGaragesAvailabilitiesRequest(garageId: string): Promise<GarageAvailability> {
  apiMock
    .onGet(`/garages/${garageId}/availability`)
    .reply(() => delayAxiosResponse<GarageAvailabilityAPI>(availabilitiesMock[garageId]));

  return api
    .get<GarageAvailabilityAPI>(`/garages/${garageId}/availability`)
    .then((res) => parseGarageAPIToGarageAvailability(res.data));
}

function parseGarageAPIToGarageAvailability(garageAvailabilityResponse: GarageAvailabilityAPI): GarageAvailability {
  return {
    garageId: garageAvailabilityResponse.garageId,
    availableSpaces: garageAvailabilityResponse.availableSpaces,
    capacity: garageAvailabilityResponse.capacity,
  };
}

export { getGaragesAvailabilitiesRequest };
