import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  getGaragesRequest,
  getOneGarageRequest,
  getGaragesAvailabilitiesRequest,
  getGaragesRequestSuccess,
  getOneGarageRequestSuccess,
  getGarageAvailabilitySuccess,
} from '../../../store/garages';

interface Response {
  loading: boolean;
  error: string | null;
}

type UseGetGaragesReturn = [Response, () => Promise<void>];

function useGetGarages(): UseGetGaragesReturn {
  const dispatch = useDispatch();
  const [response, setResponse] = useState<Response>({ loading: false, error: null });

  async function request() {
    try {
      setResponse({ loading: true, error: null });

      const data = await getGaragesRequest();

      dispatch(getGaragesRequestSuccess(data));
      setResponse({ loading: false, error: null });
    } catch (err) {
      setResponse({ loading: false, error: err.message });
    }
  }

  return [response, request];
}

function useGetOneFullDataGarage(garageId: string): UseGetGaragesReturn {
  const dispatch = useDispatch();
  const [response, setResponse] = useState<Response>({ loading: false, error: null });

  async function request() {
    try {
      setResponse({ loading: true, error: null });

      const [garageFullData, garageAvailability] = await Promise.all([
        getOneGarageRequest(garageId),
        getGaragesAvailabilitiesRequest(garageId),
      ]);

      dispatch(getOneGarageRequestSuccess(garageId, garageFullData));
      dispatch(getGarageAvailabilitySuccess(garageId, garageAvailability));
      setResponse({ loading: false, error: null });
    } catch (err) {
      setResponse({ loading: false, error: err.message });
    }
  }

  return [response, request];
}

export { useGetGarages, useGetOneFullDataGarage };
