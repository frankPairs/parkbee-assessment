import { DefaultTheme } from 'styled-components';

const media = {
  desktop: '1800px',
  desktopSmall: '1200px',
  tablet: '768px',
  mobile: '576px',
};

const colors = {
  black: '#000',
  primary: '#ffd600',
  gray1: '#999',
  white: '#fff',
};

const theme: DefaultTheme = { media, colors };

export { theme };
