import { useEffect } from 'react';

import { useGetGarages } from './useGaragesRequests';
import { useSelectGarages } from './useGaragesSelectors';

function useGarageList() {
  const [response, request] = useGetGarages();
  const garages = useSelectGarages();

  useEffect(function getGarages() {
    request();
  }, []);

  return { ...response, garages };
}

export { useGarageList };
