import { api } from '../../api';
import { GarageAvailabilityAPI, GarageAvailability } from './types';

function getGaragesAvailabilitiesRequest(garageId: string): Promise<GarageAvailability> {
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
