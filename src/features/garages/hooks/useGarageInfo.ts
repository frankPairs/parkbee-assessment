import { useEffect } from 'react';

import { useGetOneFullDataGarageRequest } from './useGaragesRequests';
import { useSelectGarageById } from './useGaragesSelectors';

function useGarageInfo(garageId: string) {
  const [response, request] = useGetOneFullDataGarageRequest(garageId);
  const garage = useSelectGarageById(garageId);

  useEffect(function getGarage() {
    request();
  }, []);

  return { ...response, garage };
}

export { useGarageInfo };
