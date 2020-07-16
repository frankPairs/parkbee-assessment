import { api } from '../../api';
import {
  GaragePriceAPI,
  GaragePrice,
  GarageStandardPriceAPI,
  PriceScheme,
  GarageRushHourPriceAPI,
  GarageTimeblockPriceAPI,
} from './types';

function getGaragePriceRequest(garageId: string): Promise<GaragePriceAPI> {
  return api.get<GaragePriceAPI>(`/garages/${garageId}/pricing`).then((res) => {
    switch (res.data.type) {
      case PriceScheme.STANDARD:
        return parseStandardPriceScheme(res.data as GarageStandardPriceAPI, garageId);
      case PriceScheme.RUSH_HOUR:
        return parseRushHourPriceScheme(res.data as GarageRushHourPriceAPI, garageId);
      case PriceScheme.TIMEBLOCK:
        return parseTimeblockPriceScheme(res.data as GarageTimeblockPriceAPI, garageId);
      default:
        throw new Error('Price scheme not implemented yet');
    }
  });
}

function parseStandardPriceScheme(priceResponse: GarageStandardPriceAPI, garageId: string): GaragePrice {
  return {
    garageId,
    type: priceResponse.type,
    basePrice: priceResponse.basePrice,
    dailyCap: priceResponse.dailyCap,
  };
}

function parseRushHourPriceScheme(priceResponse: GarageRushHourPriceAPI, garageId: string): GaragePrice {
  return {
    garageId,
    type: priceResponse.type,
    rate: priceResponse.rate,
    rushHourRate: priceResponse.rushHourRate,
    dailyRate: priceResponse.dailyRate,
    rushHourStartTime: priceResponse.rushHourStartTime,
    rushHourEndTime: priceResponse.rushHourEndTime,
    includeSaturday: priceResponse.includeSaturday,
    includeSunday: priceResponse.includeSunday,
  };
}

function parseTimeblockPriceScheme(priceResponse: GarageTimeblockPriceAPI, garageId: string): GaragePrice {
  return {
    garageId,
    type: priceResponse.type,
    schedules: priceResponse.schedules,
  };
}
export { getGaragePriceRequest };
