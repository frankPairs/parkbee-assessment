import { useSelector } from 'react-redux';

import { selectGaragesList } from '../../../store/garages';

const useSelectGarages = () => useSelector(selectGaragesList);

export { useSelectGarages };
