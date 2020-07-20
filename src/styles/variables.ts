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
  gray1: '#717171',
  white: '#fff',
  green: '#2e7d32',
  red: '#c62828',
};

const theme: DefaultTheme = { media, colors };

export { theme };
