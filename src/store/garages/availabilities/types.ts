/* State */
interface GaragesAvailabilitiesState {
  data: { [garageId: number]: GarageAvailability } | null;
}

/* Actions */
enum GaragesAvailabilitiesActionTypes {
  ADD_GARAGE_AVAILABILITY = 'addGarageAvailability',
}

interface AddGarageAvailabilityAction {
  type: GaragesAvailabilitiesActionTypes.ADD_GARAGE_AVAILABILITY;
  payload: { garageId: string; garageAvailability: GarageAvailability };
}

type GaragesAvailabilitiesActions = AddGarageAvailabilityAction;

/* Models */
interface GarageAvailability {
  garageId: string;
  availableSpaces: number;
  capacity: number;
}

/* API Models */
interface GarageAvailabilityAPI {
  garageId: string;
  garageName: string;
  name: string;
  zoneNumber: number;
  availableSpaces: number;
  capacity: number;
}

export {
  GarageAvailabilityAPI,
  GaragesAvailabilitiesState,
  GarageAvailability,
  GaragesAvailabilitiesActions,
  AddGarageAvailabilityAction,
  GaragesAvailabilitiesActionTypes,
};
