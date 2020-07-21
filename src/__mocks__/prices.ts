import { GaragePriceAPI, PriceScheme } from '../store/garages/prices/types';

const pricesMock: { [garageId: string]: GaragePriceAPI } = {
  '6db25388-697d-4b6d-9d9b-8372c374b408': {
    type: PriceScheme.STANDARD,
    basePrice: 5.0,
    dailyCap: 25.0,
  },
  'd14bc3e8-93ff-4e6e-be15-c7574252c5be': {
    type: PriceScheme.STANDARD,
    basePrice: 2.0,
    dailyCap: 25.0,
  },
};

export { pricesMock };
