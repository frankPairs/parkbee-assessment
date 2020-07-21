import { useSelector } from 'react-redux';

import { AppState } from '../../../store';
import {
  selectGaragesList,
  selectGarageById,
  selectGarageAvailability,
  selectGaragesListIsCached,
  selectGaragePrice,
  selectDoorTransaction,
} from '../../../store/garages';

const useSelectGarages = () => useSelector(selectGaragesList);

const useSelectGaragesListIsCached = () => useSelector(selectGaragesListIsCached);

const useSelectGarageById = (garageId: string) => useSelector((state: AppState) => selectGarageById(state, garageId));

const useSelectGarageAvailability = (garageId: string) =>
  useSelector((state: AppState) => selectGarageAvailability(state, garageId));

const useSelectGaragePrice = (garageId: string) => useSelector((state: AppState) => selectGaragePrice(state, garageId));

const useSelectDoorTransaction = (doorId: string) =>
  useSelector((state: AppState) => selectDoorTransaction(state, doorId));

export {
  useSelectGarages,
  useSelectGarageById,
  useSelectGarageAvailability,
  useSelectGaragesListIsCached,
  useSelectGaragePrice,
  useSelectDoorTransaction,
};
