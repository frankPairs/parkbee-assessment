/* State */
interface GaragesListState {
  data: { [garageId: number]: Garage } | null;
  isCached: boolean;
}

/* Actions */
enum GaragesActionTypes {
  SET_GARAGES_LIST_DATA = 'setGaragesListData',
  ADD_GARAGE = 'addGarage',
  ADD_GARAGE_TRANSACTION = 'addGarageTransaction',
}

interface SetGaragesListDataAction {
  type: GaragesActionTypes.SET_GARAGES_LIST_DATA;
  payload: { [garageId: string]: Garage };
}

interface AddGarageAction {
  type: GaragesActionTypes.ADD_GARAGE;
  payload: {
    garageId: string;
    garage: Garage;
  };
}

type GaragesActions = SetGaragesListDataAction | AddGarageAction;

/* Models */

interface Garage {
  id: string;
  name: string;
  fullName: string;
  countryCode: string;
  zoneNumber: number;
  doors: GarageDoor[];
  location: GarageLocation | null;
  active: boolean;
  photos: GaragePhoto[];
  isPayPerMinute: boolean;
  isReservable: boolean;
  isPrepaid: boolean;
  isSuspended: boolean;
  hasBarrier: boolean;
}

interface GarageLocation {
  street: string;
  postalCode: string;
  city: string;
}

interface GaragePhoto {
  name: string;
  urls: string[];
}

interface GarageDoor {
  doorId: string;
  doorType: string;
  description: string;
}

/* API Models */
interface GarageAPI {
  id: string;
  name: string;
  garageName: string;
  countryCode: string;
  zoneNumber: number;
}

interface FullGarageAPI {
  garageId: string;
  garageName: string;
  name: string;
  latitude: number;
  longitude: number;
  streetAddress: string;
  postalCode: string;
  city: string;
  countryCode: string;
  hasBarrier: boolean;
  zoneNumber: number;
  isSuspended: boolean;
  garageSuspensions: [];
  doors: {
    doorId: string;
    doorType: string;
    description: string;
  }[];
  garageInformation: {
    id: string;
    countryCode: string;
    message: string;
  }[];
  isPayPerMinute: boolean;
  isPrepaid: boolean;
  isReservable: boolean;
  active: boolean;
  region: string;
  timezone: string;
  capacity: number;
  photos: {
    description: string;
    extension: string;
    urls: {
      name: string;
      size: string;
      url: string;
    }[];
  }[];
}

export {
  Garage,
  GarageDoor,
  GaragesListState,
  GaragesActionTypes,
  SetGaragesListDataAction,
  AddGarageAction,
  GaragesActions,
  GarageAPI,
  FullGarageAPI,
};
