import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  getGaragesRequest,
  getOneGarageRequest,
  getGaragesAvailabilitiesRequest,
  getGaragesRequestSuccess,
  getOneGarageRequestSuccess,
  getGarageAvailabilitySuccess,
  getGaragePriceRequest,
  getGaragePriceSuccess,
  startParkRequest,
  StartParkAPIRequest,
  postStartParkSuccess,
  stopParkRequest,
  postStopParkSuccess,
} from '../../../store/garages';
import { RequestState } from '../../../types';
import { useSelectGaragesListIsCached } from './useGaragesSelectors';

interface Response {
  state: RequestState;
  error: string | null;
}

type UseGetGaragesReturn = [Response, () => Promise<void>];
type UseGetOneFullDataGarageReturn = [Response, () => Promise<void>];
type UseStartParkRequest = [Response, (input: StartParkAPIRequest) => Promise<void>];
type UseStopParkRequest = [Response, (doorId: string, transactionId: string) => Promise<void>];

function useGetGaragesRequest(): UseGetGaragesReturn {
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

function useGetOneFullDataGarageRequest(garageId: string): UseGetOneFullDataGarageReturn {
  const dispatch = useDispatch();
  const [response, setResponse] = useState<Response>({ state: RequestState.IDLE, error: null });

  async function request() {
    try {
      setResponse({ state: RequestState.LOADING, error: null });

      const [garageFullData, garageAvailability, garagePrice] = await Promise.all([
        getOneGarageRequest(garageId),
        getGaragesAvailabilitiesRequest(garageId),
        getGaragePriceRequest(garageId),
      ]);

      dispatch(getOneGarageRequestSuccess(garageId, garageFullData));
      dispatch(getGarageAvailabilitySuccess(garageId, garageAvailability));
      dispatch(getGaragePriceSuccess(garageId, garagePrice));
      setResponse({ state: RequestState.SUCCESS, error: null });
    } catch (err) {
      setResponse({ state: RequestState.ERROR, error: err.message });
    }
  }

  return [response, request];
}

function useStartParkRequest(): UseStartParkRequest {
  const dispatch = useDispatch();
  const [response, setResponse] = useState<Response>({ state: RequestState.IDLE, error: null });

  async function request(input: StartParkAPIRequest) {
    try {
      setResponse({ state: RequestState.LOADING, error: null });

      const data = await startParkRequest(input);

      dispatch(postStartParkSuccess(input.DoorId, data));
      setResponse({ state: RequestState.SUCCESS, error: null });
    } catch (err) {
      setResponse({ state: RequestState.ERROR, error: err.message });
    }
  }

  return [response, request];
}

function useStopParkRequest(): UseStopParkRequest {
  const dispatch = useDispatch();
  const [response, setResponse] = useState<Response>({ state: RequestState.IDLE, error: null });

  async function request(doorId: string, transactionId: string) {
    try {
      setResponse({ state: RequestState.LOADING, error: null });

      const data = await stopParkRequest(transactionId);

      dispatch(postStopParkSuccess(doorId, data));
      setResponse({ state: RequestState.SUCCESS, error: null });
    } catch (err) {
      setResponse({ state: RequestState.ERROR, error: err.message });
    }
  }

  return [response, request];
}
export { useGetGaragesRequest, useGetOneFullDataGarageRequest, useStartParkRequest, useStopParkRequest };
