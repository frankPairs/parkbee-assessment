import { delayAxiosResponse } from '../../../__mocks__';
import { api, apiMock } from '../../api';
import { StopParkAPIResponse, StartParkAPIResponse, StartParkAPIRequest } from './types';

function startParkRequest(input: StartParkAPIRequest): Promise<string> {
  apiMock
    .onPost(`/parkingtransactions`)
    .reply(() =>
      delayAxiosResponse<{ transactionId: string }>({ transactionId: 'e5758984-bb61-4acf-abbb-516afabb7098' }),
    );

  return api.post<StartParkAPIResponse>('/parkingtransactions', input).then((res) => res.data.transactionId);
}

function stopParkRequest(transactionId: string): Promise<number> {
  apiMock
    .onPost(`/parkingtransactions/${transactionId}/stop`)
    .reply(() => delayAxiosResponse<{ transactionAmount: number }>({ transactionAmount: Math.random() * 100 }));

  return api
    .post<StopParkAPIResponse>(`/parkingtransactions/${transactionId}/stop`)
    .then((res) => res.data.transactionAmount);
}
export { startParkRequest, stopParkRequest };
