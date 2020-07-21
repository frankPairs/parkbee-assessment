/* State */
interface GaragesTransactionsState {
  data: { [doorId: string]: string | undefined } | null;
}

/* Actions */
enum GaragesTransactionsActionTypes {
  START_PARK = 'startPark',
  STOP_PARK = 'stopPark',
}

interface StartParkAction {
  type: GaragesTransactionsActionTypes.START_PARK;
  payload: { doorId: string; transactionId: string };
}

interface StopParkAction {
  type: GaragesTransactionsActionTypes.STOP_PARK;
  payload: { doorId: string };
}

interface StartParkAPIResponse {
  transactionId: string;
}

interface StartParkAPIRequest {
  RegistrationNumber: string;
  ExternalClientId: string;
  GarageId: string;
  DoorId: string;
}

interface StopParkAPIResponse {
  transactionAmount: number;
}

type GaragesTransactionsActions = StartParkAction | StopParkAction;

export {
  GaragesTransactionsActions,
  GaragesTransactionsActionTypes,
  GaragesTransactionsState,
  StartParkAction,
  StopParkAction,
  StartParkAPIResponse,
  StartParkAPIRequest,
  StopParkAPIResponse,
};
