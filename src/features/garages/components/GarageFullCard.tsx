import React from 'react';

import { Garage } from '../../../store/garages';
import { GarageFeature } from './GarageFeature';
import { GarageAvailability } from './GarageAvailability';
import { GarageParkButton } from './GarageParkButton';
import { Wrapper } from './GarageFullCard.styled';

interface Props {
  garage: Garage;
}

function GarageFullCard({ garage }: Props) {
  const photo = garage.photos[0];

  return (
    <Wrapper>
      <header className="header">
        {garage.location && (
          <h3 className="title">
            {`${garage.location.street}, ${garage.location.postalCode}, ${garage.location.city}`}
          </h3>
        )}
        <GarageAvailability garageId={garage.id} />
      </header>
      <div className="content">
        <div className="image-wrapper">{photo && <img alt={photo.name} src={photo.urls[1]} />}</div>
        <div className="info-wrapper">
          <p className="name">{garage.fullName}</p>

          <ul className="features">
            <GarageFeature text="Pay per minute" hasFeature={garage.isPayPerMinute} />
            <GarageFeature text="Reservable" hasFeature={garage.isReservable} />
            <GarageFeature text="Pre-paid" hasFeature={garage.isPrepaid} />
            <GarageFeature text="Suspended" hasFeature={garage.isSuspended} />
            <GarageFeature text="Has barrier" hasFeature={garage.hasBarrier} />
          </ul>
        </div>
      </div>
      <footer className="footer">
        <div className="content-footer" />

        <GarageParkButton garageId={garage.id} doors={garage.doors} />
      </footer>
    </Wrapper>
  );
}

export { GarageFullCard };
