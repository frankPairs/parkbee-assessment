import { Dispatch } from 'redux';

import { GaragePrice, AddGaragePriceAction, GaragesPricesActionTypes } from './types';

const addGaragePrice = (garageId: string, garagePrice: GaragePrice): AddGaragePriceAction => ({
  type: GaragesPricesActionTypes.ADD_GARAGE_PRICE,
  payload: {
    garageId,
    garagePrice,
  },
});

const getGaragePriceSuccess = (garageId: string, garagePrice: GaragePrice) => async (dispatch: Dispatch) => {
  dispatch(addGaragePrice(garageId, garagePrice));
};

export { getGaragePriceSuccess };
