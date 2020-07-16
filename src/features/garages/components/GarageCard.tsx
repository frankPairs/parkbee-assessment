import React from 'react';
import { Link } from 'react-router-dom';

import { Garage } from '../../../store/garages';
import { RaisedButton } from '../../../components/buttons';
import { Wrapper } from './GarageCard.styled';

interface Props {
  garage: Garage;
}

function GarageCard({ garage }: Props) {
  return (
    <Wrapper>
      <header className="header">
        <span className="country-flag">{garage.countryCode}</span>
        <h3 className="title">{garage.name}</h3>
      </header>
      <footer className="footer">
        <div className="content-footer" />

        <Link to={`/garages/${garage.id}`}>
          <RaisedButton type="button" size="small">
            Details
          </RaisedButton>
        </Link>
      </footer>
    </Wrapper>
  );
}

export { GarageCard };
