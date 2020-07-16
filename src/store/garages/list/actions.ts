import { Dispatch } from 'redux';
import { normalize } from 'normalizr';

import { garagesList } from './schema';
import { SetGaragesListDataAction, GaragesActionTypes, Garage } from './types';

const setGaragesListData = (garages: { [garageId: string]: Garage }): SetGaragesListDataAction => ({
  type: GaragesActionTypes.SET_GARAGES_LIST_DATA,
  payload: garages,
});

const getGaragesRequestSuccess = (data: Garage[]) => async (dispatch: Dispatch) => {
  const { entities } = normalize<Garage, { garages: { [garageID: string]: Garage } }>(data, garagesList);

  dispatch(setGaragesListData(entities.garages));
};

export { getGaragesRequestSuccess };
