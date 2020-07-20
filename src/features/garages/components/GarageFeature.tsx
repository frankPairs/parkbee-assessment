import React from 'react';

import { Cancel, Checkmark } from '../../../components/icons';
import { Wrapper } from './GarageFeature.styled';

interface Props {
  text: string;
  hasFeature: boolean;
}

function GarageFeature({ text, hasFeature }: Props) {
  return (
    <Wrapper hasFeature={hasFeature}>
      <span className="icon-wrapper">{hasFeature ? <Checkmark /> : <Cancel />}</span>
      <p className="text">{text}</p>
    </Wrapper>
  );
}

export { GarageFeature };
