/* State */
interface GaragesListState {
  data: { [garageId: number]: Garage } | null;
}

/* Actions */
enum GaragesActionTypes {
  SET_GARAGES_LIST_DATA = 'setGaragesListData',
  ADD_GARAGE = 'addGarage',
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
  doors: {
    doorId: string;
    doorType: string;
    description: string;
  }[];
  active: boolean;
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
  GaragesListState,
  GaragesActionTypes,
  SetGaragesListDataAction,
  AddGarageAction,
  GaragesActions,
  GarageAPI,
  FullGarageAPI,
};
