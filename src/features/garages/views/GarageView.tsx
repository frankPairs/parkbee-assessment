import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { pathOr } from 'ramda';

import { Loading } from '../../../components/icons';
import { TitleView } from '../../../components/layout';
import { RequestState } from '../../../types';
import { GarageFullCard } from '../components';
import { useGarageInfo } from '../hooks';
import { Wrapper } from './GarageView.styled';

interface Props extends RouteComponentProps {}

function GarageView({ match }: Props) {
  const { state, garage } = useGarageInfo(pathOr('', ['params', 'garageId'], match));

  switch (state) {
    case RequestState.LOADING: {
      return <Loading />;
    }
    case RequestState.SUCCESS: {
      if (!garage) {
        return <Wrapper>Garage not found</Wrapper>;
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
    default: {
      return null;
    }
  }
}

export { GarageView };
