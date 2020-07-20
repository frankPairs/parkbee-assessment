import { useEffect } from 'react';

import { useGetOneGarage } from './useGaragesRequests';
import { useSelectGarageById } from './useGaragesSelectors';

function useGarageInfo(garageId: string) {
  const [response, request] = useGetOneGarage(garageId);
  const garage = useSelectGarageById(garageId);

  useEffect(function getGarage() {
    request();
  }, []);

  console.log(garage);
  return { ...response, garage };
}

export { useGarageInfo };
