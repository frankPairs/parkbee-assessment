import { useGetGarages } from './useGaragesRequests';
import { useSelectGarages } from './useGaragesSelectors';
import { useEffect } from 'react';

function useGarageList() {
  const [response, request] = useGetGarages();
  const garages = useSelectGarages();

  useEffect(function getGarages() {
    request();
  }, []);

  return { ...response, garages };
}

export { useGarageList };
