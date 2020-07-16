import React from 'react';
import { Switch, Route, RouteChildrenProps } from 'react-router-dom';

import { GarageListView, GarageView } from './views';

function GaragesRouter({ match }: RouteChildrenProps) {
  if (!match) {
    return null;
  }

  return (
    <Switch>
      <Route path={match.path} exact component={GarageListView} />
      <Route path={`${match.path}/:garageId`} exact component={GarageView} />
    </Switch>
  );
}

export default GaragesRouter;
