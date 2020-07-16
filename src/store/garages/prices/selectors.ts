import { pathOr } from 'ramda';

import { AppState } from '../../types';
import { GaragePrice } from './types';

const selectGaragesPricesData = (state: AppState) => state.garages.prices.data;

const selectGaragePrice = (state: AppState, garageId: string) =>
  pathOr<GaragePrice | null>(null, ['states', 'garages', 'prices', 'data', garageId], state);

export { selectGaragesPricesData, selectGaragePrice };
