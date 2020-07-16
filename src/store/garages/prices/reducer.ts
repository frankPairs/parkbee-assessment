import { GaragesPricesState, GaragesPricesActions, GaragesPricesActionTypes } from './types';

const garagesPricesInitialState: GaragesPricesState = {
  data: null,
};

function garagesPricesReducer(
  state: GaragesPricesState = garagesPricesInitialState,
  action: GaragesPricesActions,
): GaragesPricesState {
  switch (action.type) {
    case GaragesPricesActionTypes.ADD_GARAGE_PRICE: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.garageId]: action.payload.garagePrice,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export { garagesPricesReducer, garagesPricesInitialState };
