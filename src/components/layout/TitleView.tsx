import React from 'react';

import { TitleStyled } from './TitleView.styled';

interface Props {
  title: string;
}

function TitleView({ title }: Props) {
  return <TitleStyled>{title}</TitleStyled>;
}

export { TitleView };
