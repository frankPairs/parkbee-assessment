import { pathOr } from 'ramda';

import { AppState } from '../../types';
import { Garage } from './types';

const selectGaragesList = (state: AppState) => {
  const { data } = state.garages.list;
  return !data ? [] : Object.values(data);
};

const selectGaragesListIsCached = (state: AppState) => state.garages.list.isCached;

const selectGarageById = (state: AppState, garageId: string) =>
  pathOr<Garage | null>(null, ['garages', 'list', 'data', garageId], state);

export { selectGaragesList, selectGarageById, selectGaragesListIsCached };
