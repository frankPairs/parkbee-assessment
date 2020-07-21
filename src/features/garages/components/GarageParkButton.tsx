import React from 'react';

import { RaisedButton } from '../../../components/buttons';
import { useSelectGaragePrice, useSelectDoorTransaction } from '../hooks';
import { GarageStandardPrice, GarageDoor } from '../../../store/garages';
import { useStartParkRequest, useStopParkRequest } from '../hooks/useGaragesRequests';
import { useSelectGarageAvailability } from '../hooks/useGaragesSelectors';

interface Props {
  garageId: string;
  doors: GarageDoor[];
}

function GarageParkButton({ garageId, doors }: Props) {
  const currentDoor = doors[0];
  const transaction = useSelectDoorTransaction(currentDoor.doorId);
  const price = useSelectGaragePrice(garageId) as GarageStandardPrice;
  const availiability = useSelectGarageAvailability(garageId);
  const [, startParkRequest] = useStartParkRequest();
  const [, stopParkRequest] = useStopParkRequest();

  if (!price) {
    return null;
  }

  function handleStartPark() {
    startParkRequest({
      DoorId: currentDoor.doorId,
      GarageId: garageId,
      ExternalClientId: '12313',
      RegistrationNumber: '12345',
    });
  }

  function handleStopPark() {
    stopParkRequest(currentDoor.doorId, transaction as string);
  }

  if (transaction) {
    return (
      <RaisedButton onClick={handleStopPark} type="button" size="small" variant="secondary">
        Stop
      </RaisedButton>
    );
  }

  if (availiability !== null && availiability.capacity === availiability.availableSpaces) {
    return null;
  }

  return (
    <RaisedButton onClick={handleStartPark} type="button" size="small" variant="primary">
      {`Park: ${price.basePrice}€`}
    </RaisedButton>
  );
}

export { GarageParkButton };
