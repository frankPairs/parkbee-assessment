import React from 'react';
import { useGarageList } from '../hooks';

import { Loading } from '../../../components/icons';
import { RequestState } from '../../../types';
import { GarageCard } from './GarageCard';
import { Wrapper } from './GarageList.styled';

function GarageList() {
  const { state, garages } = useGarageList();

  switch (state) {
    case RequestState.LOADING: {
      return <Loading />;
    }
    case RequestState.SUCCESS: {
      return (
        <Wrapper>
          {garages.map((garage) => (
            <GarageCard key={garage.id} garage={garage} />
          ))}
        </Wrapper>
      );
    }
    default: {
      return null;
    }
  }
}

export { GarageList };
