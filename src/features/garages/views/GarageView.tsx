import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { pathOr } from 'ramda';

import { Loading } from '../../../components/icons/Loading';
import { TitleView } from '../../../components/layout';
import { GarageFullCard } from '../components';
import { useGarageInfo } from '../hooks';
import { Wrapper } from './GarageView.styled';

interface Props extends RouteComponentProps {}

function GarageView({ match }: Props) {
  const { loading, garage } = useGarageInfo(pathOr('', ['params', 'garageId'], match));

  if (loading) {
    return <Loading />;
  }

  if (!garage) {
    return (
      <Wrapper>
        <TitleView title="Garage not found" />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <TitleView title={garage.name} />
      <div className="content">
        <div className="full-card">
          <GarageFullCard garage={garage} />
        </div>
      </div>
    </Wrapper>
  );
}

export { GarageView };
