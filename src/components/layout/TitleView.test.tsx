import React, { ComponentProps } from 'react';
import { render, cleanup } from '@testing-library/react';

import { MockThemeProvider } from '../../../tests/MockThemeProvider';
import { TitleView } from './TitleView';

function getWrapper(overrideProps?: Partial<ComponentProps<typeof TitleView>>) {
  return render(
    <MockThemeProvider>
      <TitleView title="" {...overrideProps} />
    </MockThemeProvider>,
  );
}
describe('<TitleView />', () => {
  afterEach(cleanup);

  it('should show title', () => {
    const { getByText } = getWrapper({ title: 'Hello' });

    getByText('Hello');
  });
});
