import React from 'react';

import { TitleView } from '../../../components/layout';
import { GarageList } from '../components';

function GarageListView() {
  console.log('garage list view');
  return (
    <div>
      <TitleView title="Garages" />

      <GarageList />
    </div>
  );
}

export { GarageListView };
