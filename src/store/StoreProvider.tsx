import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { appStore } from './store';

type Props = {
  children: ReactNode;
};

function StoreProvider({ children }: Props) {
  return <Provider store={appStore}>{children}</Provider>;
}

export { StoreProvider };
