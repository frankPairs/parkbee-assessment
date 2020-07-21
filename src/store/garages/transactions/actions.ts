import { Dispatch } from 'redux';

import { StartParkAction, StopParkAction, GaragesTransactionsActionTypes } from './types';

const startPark = (doorId: string, transactionId: string): StartParkAction => ({
  type: GaragesTransactionsActionTypes.START_PARK,
  payload: {
    doorId,
    transactionId,
  },
});

const stopPark = (doorId: string): StopParkAction => ({
  type: GaragesTransactionsActionTypes.STOP_PARK,
  payload: {
    doorId,
  },
});

const postStartParkSuccess = (doorId: string, transactionId: string) => async (dispatch: Dispatch) => {
  dispatch(startPark(doorId, transactionId));
};

const postStopParkSuccess = (doorId: string, amount: number) => async (dispatch: Dispatch) => {
  dispatch(stopPark(doorId));

  alert(`You have to pay: ${amount}`);
};

export { postStartParkSuccess, postStopParkSuccess };
