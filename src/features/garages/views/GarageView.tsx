import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { pathOr } from 'ramda';

import { Loading } from '../../../components/icons/Loading';
import { TitleView } from '../../../components/layout';
import { useGarageInfo } from '../hooks';

interface Props extends RouteComponentProps {}

function GarageView({ match }: Props) {
  const { loading, garage } = useGarageInfo(pathOr('', ['params', 'garageId'], match));

  if (loading) {
    return <Loading />;
  }

  if (!garage) {
    return (
      <div>
        <TitleView title="Garage not found" />
      </div>
    );
  }

  return (
    <div>
      <TitleView title={garage.name} />
      <p>Garage view</p>
    </div>
  );
}

export { GarageView };
