import { Dispatch } from 'redux';

import { GarageAvailability, AddGarageAvailabilityAction, GaragesAvailabilitiesActionTypes } from './types';

const addGarageAvailability = (
  garageId: string,
  garageAvailability: GarageAvailability,
): AddGarageAvailabilityAction => ({
  type: GaragesAvailabilitiesActionTypes.ADD_GARAGE_AVAILABILITY,
  payload: {
    garageId,
    garageAvailability,
  },
});

const getGarageAvailabilitySuccess = (garageId: string, garageAvailability: GarageAvailability) => async (
  dispatch: Dispatch,
) => {
  dispatch(addGarageAvailability(garageId, garageAvailability));
};

export { getGarageAvailabilitySuccess };
