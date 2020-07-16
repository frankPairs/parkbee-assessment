import { GaragesAvailabilitiesState } from './availabilities/types';
import { GaragesListState } from './list/types';
import { GaragesPricesState } from './prices/types';

interface GaragesState {
  list: GaragesListState;
  prices: GaragesPricesState;
  availabilities: GaragesAvailabilitiesState;
}

export { GaragesState };
