import React from 'react';
import { useGarageList } from '../hooks';

import { Loading } from '../../../components/icons';
import { GarageCard } from './GarageCard';
import { Wrapper } from './GarageList.styled';

function GarageList() {
  const { loading, garages } = useGarageList();

  if (loading) {
    return <Loading />;
  }

  if (!garages) {
    return null;
  }

  console.log(garages);
  return (
    <Wrapper>
      {garages.map((garage) => (
        <GarageCard key={garage.id} garage={garage} />
      ))}
    </Wrapper>
  );
}

export { GarageList };
