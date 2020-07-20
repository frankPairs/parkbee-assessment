import { useSelector } from 'react-redux';

import { AppState } from '../../../store';
import { selectGaragesList, selectGarageById } from '../../../store/garages';

const useSelectGarages = () => useSelector(selectGaragesList);
const useSelectGarageById = (garageId: string) => useSelector((state: AppState) => selectGarageById(state, garageId));

export { useSelectGarages, useSelectGarageById };
