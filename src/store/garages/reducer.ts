import { combineReducers } from 'redux';

import { garagesListReducer } from './list/reducer';
import { garagesAvailabilitiesReducer } from './availabilities/reducer';
import { garagesPricesReducer } from './prices/reducer';

const garagesReducer = combineReducers({
  list: garagesListReducer,
  availabilities: garagesAvailabilitiesReducer,
  prices: garagesPricesReducer,
});

export { garagesReducer };
