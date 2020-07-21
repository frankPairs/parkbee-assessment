import { useEffect } from 'react';

import { useGetGaragesRequest } from './useGaragesRequests';
import { useSelectGarages } from './useGaragesSelectors';

function useGarageList() {
  const [response, request] = useGetGaragesRequest();
  const garages = useSelectGarages();

  useEffect(function getGarages() {
    request();
  }, []);

  return { ...response, garages };
}

export { useGarageList };
