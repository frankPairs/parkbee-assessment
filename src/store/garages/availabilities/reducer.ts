import { GaragesAvailabilitiesState, GaragesAvailabilitiesActions, GaragesAvailabilitiesActionTypes } from './types';

const garagesAvailabilityInitialState: GaragesAvailabilitiesState = {
  data: null,
};

function garagesAvailabilitiesReducer(
  state: GaragesAvailabilitiesState = garagesAvailabilityInitialState,
  action: GaragesAvailabilitiesActions,
): GaragesAvailabilitiesState {
  switch (action.type) {
    case GaragesAvailabilitiesActionTypes.ADD_GARAGE_AVAILABILITY: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.garageId]: action.payload.garageAvailability,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export { garagesAvailabilitiesReducer, garagesAvailabilityInitialState };
