import React from 'react';

import { useSelectGarageAvailability } from '../hooks';
import { Wrapper } from './GarageAvailability.styled';

interface Props {
  garageId: string;
}

function GarageAvailability({ garageId }: Props) {
  const availiability = useSelectGarageAvailability(garageId);

  if (!availiability) {
    return <Wrapper isCompleted={false}>-</Wrapper>;
  }

  return (
    <Wrapper
      isCompleted={availiability.capacity === availiability.availableSpaces}
    >{`${availiability.availableSpaces}/${availiability.capacity} parks`}</Wrapper>
  );
}

export { GarageAvailability };
