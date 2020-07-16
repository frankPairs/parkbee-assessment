import React from 'react';

import { TitleView } from '../../../components/layout';
import { GarageList } from '../components';

function GarageListView() {
  return (
    <div>
      <TitleView title="Garages" />

      <GarageList />
    </div>
  );
}

export { GarageListView };
