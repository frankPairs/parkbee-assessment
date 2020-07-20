import { GaragesActions, GaragesListState, GaragesActionTypes } from './types';

const garagesListInitialState: GaragesListState = {
  data: null,
};

function garagesListReducer(
  state: GaragesListState = garagesListInitialState,
  action: GaragesActions,
): GaragesListState {
  switch (action.type) {
    case GaragesActionTypes.SET_GARAGES_LIST_DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case GaragesActionTypes.ADD_GARAGE: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.garageId]: action.payload.garage,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export { garagesListReducer, garagesListInitialState };
