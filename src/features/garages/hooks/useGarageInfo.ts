import { useEffect } from 'react';

import { useGetOneFullDataGarage } from './useGaragesRequests';
import { useSelectGarageById } from './useGaragesSelectors';

function useGarageInfo(garageId: string) {
  const [response, request] = useGetOneFullDataGarage(garageId);
  const garage = useSelectGarageById(garageId);

  useEffect(function getGarage() {
    request();
  }, []);

  return { ...response, garage };
}

export { useGarageInfo };
