import { pathOr } from 'ramda';

import { AppState } from '../../types';

const selectDoorTransaction = (state: AppState, doorId: string) =>
  pathOr<string | null>(null, ['garages', 'transactions', 'data', doorId], state);

export { selectDoorTransaction };
