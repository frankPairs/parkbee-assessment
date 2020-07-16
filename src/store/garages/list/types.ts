/* State */
interface GaragesListState {
  data: { [garageId: number]: Garage } | null;
}

/* Actions */
enum GaragesActionTypes {
  SET_GARAGES_LIST_DATA = 'setGaragesListData',
}

interface SetGaragesListDataAction {
  type: GaragesActionTypes.SET_GARAGES_LIST_DATA;
  payload: { [garageId: string]: Garage };
}

type GaragesActions = SetGaragesListDataAction;

/* Models */
enum DoorType {
  HUMAN = 'human',
  ENTRY = 'entry',
  EXIT = 'exit',
}

interface Garage {
  id: number;
  name: string;
  fullName: string;
  countryCode: string;
  zoneNumber: string;
  doors: {
    doorId: string;
    doorType: DoorType;
    description: string;
  }[];
  active: boolean;
}

/* API Models */
interface GarageAPI {
  id: number;
  garageName: string;
  countryCode: string;
  zoneNumber: string;
}

interface FullGarageAPI {
  garageId: number;
  garageName: string;
  name: string;
  lattitude: number;
  longitude: number;
  streetAddress: string;
  postalCode: string;
  city: string;
  countryCode: string;
  hasBarrier: boolean;
  zoneNumber: string;
  isSuspended: boolean;
  doors: {
    doorId: string;
    doorType: DoorType;
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
    urls_name: string;
    urls_size: string;
    urls_url: string;
  }[];
}

export {
  Garage,
  GaragesListState,
  GaragesActionTypes,
  SetGaragesListDataAction,
  GaragesActions,
  GarageAPI,
  FullGarageAPI,
};
