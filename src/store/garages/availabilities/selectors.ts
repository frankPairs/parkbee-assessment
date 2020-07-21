import { pathOr } from 'ramda';

import { AppState } from '../../types';
import { GarageAvailability } from './types';

const selectGaragesAvailabilitiesData = (state: AppState) => state.garages.availabilities.data;

const selectGarageAvailability = (state: AppState, garageId: string) =>
  pathOr<GarageAvailability | null>(null, ['garages', 'availabilities', 'data', garageId], state);

export { selectGaragesAvailabilitiesData, selectGarageAvailability };
