/* State */
interface GaragesPricesState {
  data: { [garageId: number]: GaragePrice } | null;
}

/* Actions */
enum GaragesPricesActionTypes {
  ADD_GARAGE_PRICE = 'addGaragePrice',
}

interface AddGaragePriceAction {
  type: GaragesPricesActionTypes.ADD_GARAGE_PRICE;
  payload: { garageId: string; garagePrice: GaragePrice };
}

type GaragesPricesActions = AddGaragePriceAction;

/* Models */
interface GarageStandardPrice extends GarageStandardPriceAPI {
  garageId: string;
}

interface GarageRushHourPrice extends GarageRushHourPriceAPI {
  garageId: string;
}

interface GarageTimeblockPrice extends GarageTimeblockPriceAPI {
  garageId: string;
}

type GaragePrice = GarageStandardPrice | GarageRushHourPrice | GarageTimeblockPrice;

/* API Models */
enum PriceScheme {
  STANDARD = 'standerd',
  RUSH_HOUR = 'rushHour',
  TIMEBLOCK = 'timeblock',
}

interface GarageStandardPriceAPI {
  type: PriceScheme.STANDARD;
  basePrice: number;
  dailyCap: number;
}

interface GarageRushHourPriceAPI {
  type: PriceScheme.RUSH_HOUR;
  rate: number;
  rushHourRate: number;
  dailyRate: number;
  rushHourStartTime: string;
  rushHourEndTime: string;
  includeSaturday: boolean;
  includeSunday: boolean;
}

interface GarageTimeblockPriceAPI {
  type: PriceScheme.TIMEBLOCK;
  schedules: {
    uniqueId: string;
    daysOfWeek: number;
    startTime: string;
    endTime: string;
    timeBlocks: {
      price: number;
      duration: string;
    }[];
  }[];
}

type GaragePriceAPI = GarageStandardPriceAPI | GarageRushHourPriceAPI | GarageTimeblockPriceAPI;

export {
  GarageTimeblockPriceAPI,
  GarageStandardPriceAPI,
  GarageRushHourPriceAPI,
  GaragePriceAPI,
  GaragePrice,
  GarageStandardPrice,
  GarageRushHourPrice,
  GarageTimeblockPrice,
  PriceScheme,
  GaragesPricesState,
  GaragesPricesActionTypes,
  GaragesPricesActions,
  AddGaragePriceAction,
};
