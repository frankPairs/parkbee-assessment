import { useEffect } from 'react';

import { useGetGarages } from './useGaragesRequests';
import { useSelectGarages, useSelectGaragesListIsCached } from './useGaragesSelectors';

function useGarageList() {
  const [response, request] = useGetGarages();
  const garages = useSelectGarages();
  const isCached = useSelectGaragesListIsCached();

  useEffect(function getGarages() {
    if (!isCached) {
      request();
    }
  }, []);

  return { ...response, garages };
}

export { useGarageList };
