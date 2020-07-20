import { Dispatch } from 'redux';
import { normalize } from 'normalizr';

import { garagesList } from './schema';
import { SetGaragesListDataAction, AddGarageAction, GaragesActionTypes, Garage } from './types';

const setGaragesListData = (garages: { [garageId: string]: Garage }): SetGaragesListDataAction => ({
  type: GaragesActionTypes.SET_GARAGES_LIST_DATA,
  payload: garages,
});

const addGarageData = (garageId: string, garage: Garage): AddGarageAction => ({
  type: GaragesActionTypes.ADD_GARAGE,
  payload: {
    garageId,
    garage,
  },
});

const getGaragesRequestSuccess = (data: Garage[]) => async (dispatch: Dispatch) => {
  const { entities } = normalize<Garage, { garages: { [garageID: string]: Garage } }>(data, garagesList);

  dispatch(setGaragesListData(entities.garages));
};

const getOneGarageRequestSuccess = (garageId: string, data: Garage) => async (dispatch: Dispatch) => {
  dispatch(addGarageData(garageId, data));
};

export { getGaragesRequestSuccess, getOneGarageRequestSuccess };
