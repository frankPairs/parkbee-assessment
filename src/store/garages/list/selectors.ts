import { pathOr } from 'ramda';

import { AppState } from '../../types';
import { Garage } from './types';

const selectGaragesListData = (state: AppState) => state.garages.list.data;

const selectGarageById = (state: AppState, garageId: string) =>
  pathOr<Garage | null>(null, ['states', 'garages', 'list', 'data', garageId], state);

export { selectGaragesListData, selectGarageById };
