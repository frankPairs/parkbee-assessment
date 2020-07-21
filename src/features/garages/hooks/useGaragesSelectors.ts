import { useSelector } from 'react-redux';

import { AppState } from '../../../store';
import {
  selectGaragesList,
  selectGarageById,
  selectGarageAvailability,
  selectGaragesListIsCached,
} from '../../../store/garages';

const useSelectGarages = () => useSelector(selectGaragesList);
const useSelectGaragesListIsCached = () => useSelector(selectGaragesListIsCached);
const useSelectGarageById = (garageId: string) => useSelector((state: AppState) => selectGarageById(state, garageId));
const useSelectGarageAvailability = (garageId: string) =>
  useSelector((state: AppState) => selectGarageAvailability(state, garageId));

export { useSelectGarages, useSelectGarageById, useSelectGarageAvailability, useSelectGaragesListIsCached };
