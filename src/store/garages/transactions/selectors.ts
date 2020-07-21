import { pathOr } from 'ramda';

import { AppState } from '../../types';

const selectDoorTransaction = (state: AppState, doorId: string) => {
  const result = pathOr<string | null>(null, ['garages', 'transactions', 'data', doorId], state);

  console.log('result', result);
  console.log('doorId', doorId);
  return result;
};

export { selectDoorTransaction };
