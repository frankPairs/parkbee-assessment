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
import { RequestState } from '../../../types';
import { useSelectGaragesListIsCached } from './useGaragesSelectors';

interface Response {
  state: RequestState;
  error: string | null;
}

type UseGetGaragesReturn = [Response, () => Promise<void>];

function useGetGarages(): UseGetGaragesReturn {
  const dispatch = useDispatch();
  const [response, setResponse] = useState<Response>({ state: RequestState.IDLE, error: null });
  const isCached = useSelectGaragesListIsCached();

  async function request() {
    if (isCached) {
      setResponse({ state: RequestState.SUCCESS, error: null });
      return;
    }

    try {
      setResponse({ state: RequestState.LOADING, error: null });

      const data = await getGaragesRequest();

      dispatch(getGaragesRequestSuccess(data));
      setResponse({ state: RequestState.SUCCESS, error: null });
    } catch (err) {
      setResponse({ state: RequestState.ERROR, error: err.message });
    }
  }

  return [response, request];
}

function useGetOneFullDataGarage(garageId: string): UseGetGaragesReturn {
  const dispatch = useDispatch();
  const [response, setResponse] = useState<Response>({ state: RequestState.IDLE, error: null });

  async function request() {
    try {
      setResponse({ state: RequestState.LOADING, error: null });

      const [garageFullData, garageAvailability] = await Promise.all([
        getOneGarageRequest(garageId),
        getGaragesAvailabilitiesRequest(garageId),
      ]);

      dispatch(getOneGarageRequestSuccess(garageId, garageFullData));
      dispatch(getGarageAvailabilitySuccess(garageId, garageAvailability));
      setResponse({ state: RequestState.SUCCESS, error: null });
    } catch (err) {
      setResponse({ state: RequestState.ERROR, error: err.message });
    }
  }

  return [response, request];
}

export { useGetGarages, useGetOneFullDataGarage };
