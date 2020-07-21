import { GaragesAvailabilitiesState } from './availabilities/types';
import { GaragesListState } from './list/types';
import { GaragesPricesState } from './prices/types';
import { GaragesTransactionsState } from './transactions/types';

interface GaragesState {
  list: GaragesListState;
  prices: GaragesPricesState;
  availabilities: GaragesAvailabilitiesState;
  transactions: GaragesTransactionsState;
}

export { GaragesState };
