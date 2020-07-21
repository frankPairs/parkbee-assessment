import React from 'react';

import { RaisedButton } from '../../../components/buttons';
import { useSelectGaragePrice } from '../hooks';
import { GarageStandardPrice } from '../../../store/garages';

interface Props {
  garageId: string;
}

function GarageParkButton({ garageId }: Props) {
  const price = useSelectGaragePrice(garageId) as GarageStandardPrice;

  if (!price) {
    return null;
  }

  return (
    <RaisedButton type="button" size="small" variant="primary">
      {`Park: ${price.basePrice}€`}
    </RaisedButton>
  );
}

export { GarageParkButton };
