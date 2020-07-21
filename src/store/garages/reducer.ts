import { combineReducers } from 'redux';

import { garagesListReducer } from './list/reducer';
import { garagesAvailabilitiesReducer } from './availabilities/reducer';
import { garagesPricesReducer } from './prices/reducer';
import { garagesTransactionsReducer } from './transactions/reducer';

const garagesReducer = combineReducers({
  list: garagesListReducer,
  availabilities: garagesAvailabilitiesReducer,
  prices: garagesPricesReducer,
  transactions: garagesTransactionsReducer,
});

export { garagesReducer };
