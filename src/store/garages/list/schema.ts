import { schema } from 'normalizr';

const garage = new schema.Entity('garages');

const garagesList = new schema.Array(garage);

export { garagesList };
