import { GaragesTransactionsActionTypes, GaragesTransactionsActions, GaragesTransactionsState } from './types';

const garagesTransactionsInitialState: GaragesTransactionsState = {
  data: null,
};

function garagesTransactionsReducer(
  state: GaragesTransactionsState = garagesTransactionsInitialState,
  action: GaragesTransactionsActions,
): GaragesTransactionsState {
  switch (action.type) {
    case GaragesTransactionsActionTypes.START_PARK: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.doorId]: action.payload.transactionId,
        },
      };
    }
    case GaragesTransactionsActionTypes.STOP_PARK: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.doorId]: undefined,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export { garagesTransactionsReducer, garagesTransactionsInitialState };
